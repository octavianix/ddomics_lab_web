import type { ImgHTMLAttributes } from "react";

/**
 * Drop-in replacement for <img> used for people's photos.
 *
 * This is a deterrent, not real DRM — a determined visitor can still get
 * the image via devtools or a screenshot. It just removes the easy paths
 * (right-click "Save image as", drag-to-desktop, long-press-to-save on
 * mobile) via a transparent slide sitting on top of the actual <img>.
 */
export function ProtectedImage({
  className = "",
  ...imgProps
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <span className="relative block h-full w-full select-none">
      <img
        {...imgProps}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className={className}
      />
      {/* Transparent slide above the image: absorbs right-click, drag and
          long-press so the underlying <img> is never the direct target. */}
      <span
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        className="absolute inset-0 z-10 bg-transparent"
      />
    </span>
  );
}
