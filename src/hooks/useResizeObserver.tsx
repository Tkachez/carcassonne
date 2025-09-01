import React from 'react'

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>

export const useResizeObserver = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = React.useState<ObserverRect>()

  React.useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect()
        setRect(boundingRect)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return { ref, rect }
}
