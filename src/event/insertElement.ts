import { mount } from '../utils/mount'
import { isNull } from '../is/isNull'

/**
 * 插入元素
 * @param { HTMLElement | string } parent 父元素
 * @param { HTMLElement | DocumentFragment | string } element 将被插入的元素
 * @param { HTMLElement } target 插入在这个元素之前
 * @returns
 */
export function insertElement(
  parent: HTMLElement | string,
  element: HTMLElement | DocumentFragment | string,
  target?: HTMLElement | null,
): void {
  return mount(parent, element, (parent, element) =>
    (parent as HTMLElement).insertBefore(
      element as HTMLElement,
      isNull(target) ? null : target || (parent as HTMLElement).firstChild,
    ))
}
