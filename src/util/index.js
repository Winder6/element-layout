let uid = 1;
export function guid() {
  return uid++
}

export function convertToCode(components){
  console.log(components)
  let html=''
  for(let i =0; i < components.length; i++){
    const item = components[i]
    let temp
    let innerHTML=''
    let attr=''
    for(let key in item.attr){

      if(item.attr[key].compileType&&item.attr[key].compileType==='innerHTML') {
        innerHTML = item.attr[key].value
        continue
      }
      attr = attr + ' ' + item.attr[key].name + '="' + item.attr[key].value+'"'
    }

    //不能直接更改掉item.template,不然下次更改不能替换
    temp = item.template
    temp=temp.replace('{attr}', attr)
    temp=temp.replace('{innerHTML}', innerHTML)
    html=html  + '\r\n' +temp
  }
  return `<template>
<div>
${html}
</div>
</template>`
  // let html=`<template><div></div></template>`
}
