const copy = (info) => {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value',info)
    input.setAttribute('create',1)
    input.select()
    document.execCommand("Copy")
    let list=document.getElementsByTagName('input')
    let inputList = Array.prototype.slice.call(list)
    inputList.forEach(item => {
        if(item.getAttribute('create')) {
            document.body.removeChild(item)
        }
    })
}
export default copy

