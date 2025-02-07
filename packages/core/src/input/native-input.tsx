import { Input, InputProps } from "@tarojs/components"
import classNames from "classnames"
import * as React from "react"
import { prefixClassname } from "../styles"
import { InputColor } from "./input.shared"

export interface NativeInputProps extends InputProps {
  readonly?: boolean
  color?: InputColor
}

function NativeInput(props: NativeInputProps) {
  const { nativeProps = {}, readonly, color, ...restProps } = props
  const { className: nativeClassname, ...restNativeProps } = nativeProps as Record<string, string>
  return (
    <Input
      nativeProps={{
        className: classNames(
          prefixClassname("native-input"),
          {
            [prefixClassname("native-input--readonly")]: readonly,
            [prefixClassname("native-input--colorful")]: color || readonly,
          },
          nativeClassname,
        ),
        ...restNativeProps,
      }}
      {...restProps}
    />
  )
}

export default NativeInput
