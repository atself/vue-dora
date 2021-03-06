/* eslint-disable no-unused-vars */
import Popup from '@/vdora-container-popup'

export default function (Component) {
  return {
    functional: true,
    render: function (h, context) {
      context.data.attrs.text = '我是 DemoPopup组件'
      return (
        <Popup {...context.data} {...context.props}>
          <Component {...context.data} />
        </Popup>
      )
    }
  }
}
