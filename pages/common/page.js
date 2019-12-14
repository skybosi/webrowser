const app = getApp();
import render from '../../template/render/render.js'

export default function(context = {}) {
  Object.assign(context, render);
  return Page({
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      return {
        title: '模板驱动',
        imageUrl: '',
        path: '/pages/index/index'
      }
    },
    ...context
  });
}