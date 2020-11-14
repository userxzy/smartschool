export const tools = {
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // 缩进
      [{ color: [] }], // 字体颜色、字体背景颜色
      [{ align: [] }], // 对齐方式
      ["clean"], // 清除文本格式
    ]
  },
  placeholder: '请输入',
  readyOnly: false, //是否只读
  theme: 'snow', //主题 snow/bubble
  syntax: true //语法检测
}
