const $Form = $(`#signInForm`)
$Form.on(`submit`, (e) => {
    e.preventDefault()//阻止其自动事件，养成习惯
    const name = $Form.find(`input[name=name]`).val()
    //val是value缩写，就是为了找到name对应的这个值
    const password = $Form.find('input[name=password]').val()
    $.ajax({
        method: 'POST',//GET请求无法将data传到url以外的东西
        url: '/sign-in',
        contentType: 'text/json;charset=UTF-8',
        data: JSON.stringify({ name, password })
    }).then(() => {
        alert('登陆成功')
        location.href = '/home.html'
    }
        , () => { })
})
