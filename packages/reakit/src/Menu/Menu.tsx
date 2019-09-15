import * as React from "react";
import { warning } from "reakit-utils/warning";
import { Omit } from "reakit-utils/types";
import { createComponent } from "reakit-system/createComponent";
import { useCreateElement } from "reakit-system/useCreateElement";
import { createOnKeyDown } from "reakit-utils/createOnKeyDown";
import { createHook } from "reakit-system/createHook";
import { useAllCallbacks } from "reakit-utils/useAllCallbacks";
import {
  PopoverOptions,
  PopoverHTMLProps,
  usePopover
} from "../Popover/Popover";
import { MenuBarOptions, MenuBarHTMLProps, useMenuBar } from "./MenuBar";
import { useMenuState, MenuStateReturn } from "./MenuState";
import { MenuContext, MenuContextType } from "./__utils/MenuContext";

export type MenuOptions = Omit<PopoverOptions, "hideOnEsc"> &
  Pick<MenuStateReturn, "placement"> &
  Pick<Partial<MenuStateReturn>, "first" | "last"> &
  MenuBarOptions;

export type MenuHTMLProps = PopoverHTMLProps & MenuBarHTMLProps;

export type MenuProps = MenuOptions & MenuHTMLProps;

export const useMenu = createHook<MenuOptions, MenuHTMLProps>({
  name: "Menu",
  compose: [useMenuBar, usePopover],
  useState: useMenuState,

  useOptions(options) {
    const parent = React.useContext(MenuContext);
    const parentIsMenuBar = parent && parent.role === "menubar";

    return {
      unstable_autoFocusOnShow: !parent,
      unstable_autoFocusOnHide: !parentIsMenuBar,
      modal: false,
      ...options
    };
  },

  useProps(options, { onKeyDown: htmlOnKeyDown, ...htmlProps }) {
    const parent = React.useContext(MenuContext);
    const isHorizontal = options.orientation === "horizontal";
    const isVertical = options.orientation === "vertical";
    let ancestorMenuBar: MenuContextType | undefined | null = parent;

    while (ancestorMenuBar && ancestorMenuBar.role !== "menubar") {
      ancestorMenuBar = ancestorMenuBar.parent;
    }

    const [dir] = options.placement.split("-");

    const rovingBindings = React.useMemo(
      () =>
        createOnKeyDown({
          stopPropagation: event => {
            // On Esc, only stop propagation if there's no parent menu
            // Otherwise, pressing Esc should close all menus
            if (event.key === "Escape" && parent) return false;
            return true;
          },
          keyMap: event => {
            const targetIsMenu = event.target === event.currentTarget;
            return {
              Escape: options.hide,
              ArrowUp: targetIsMenu && !isHorizontal && options.last,
              ArrowRight: targetIsMenu && !isVertical && options.first,
              ArrowDown: targetIsMenu && !isHorizontal && options.first,
              ArrowLeft: targetIsMenu && !isVertical && options.last,
              Home: targetIsMenu && options.first,
              End: targetIsMenu && options.last,
              PageUp: targetIsMenu && options.first,
              PageDown: targetIsMenu && options.last
            };
          }
        }),
      [
        Boolean(parent),
        isHorizontal,
        isVertical,
        options.hide,
        options.last,
        options.first
      ]
    );

    const parentBindings = React.useMemo(
      () =>
        createOnKeyDown({
          stopPropagation: true,
          shouldKeyDown: event => {
            return Boolean(
              // https://github.com/facebook/react/issues/11387
              parent && event.currentTarget.contains(event.target as Element)
            );
          },
          keyMap: parent
            ? {
                ArrowRight:
                  ancestorMenuBar &&
                  parent.orientation === "horizontal" &&
                  dir !== "left"
                    ? ancestorMenuBar.next
                    : dir === "left" && options.hide,
                ArrowLeft:
                  ancestorMenuBar &&
                  parent.orientation === "horizontal" &&
                  dir !== "right"
                    ? ancestorMenuBar.previous
                    : dir === "right" && options.hide
              }
            : {}
        }),
      [
        parent && parent.orientation,
        ancestorMenuBar && ancestorMenuBar.next,
        ancestorMenuBar && ancestorMenuBar.previous,
        dir,
        options.hide
      ]
    );

    return {
      role: "menu",
      onKeyDown: useAllCallbacks(rovingBindings, parentBindings, htmlOnKeyDown),
      ...htmlProps
    };
  },

  useCompose(options, htmlProps) {
    htmlProps = useMenuBar(options, htmlProps);
    return usePopover({ ...options, hideOnEsc: false }, htmlProps);
  }
});

export const Menu = createComponent({
  as: "div",
  useHook: useMenu,
  useCreateElement: (type, props, children) => {
    warning(
      !props["aria-label"] && !props["aria-labelledby"],
      "Menu",
      "You should provide either `aria-label` or `aria-labelledby` props.",
      "See https://reakit.io/docs/menu"
    );
    return useCreateElement(type, props, children);
  }
});
