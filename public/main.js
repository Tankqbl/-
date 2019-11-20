const $Form = $(`#registerForm`)
$Form.on(`submit`, (e) => {
    e.preventDefault()//阻止其自动事件，养成习惯
    const name = $Form.find(`input[name=name]`).val()
    //val是value缩写，就是为了找到name对应的这个值
    const password = $Form.find('input[name=password]').val()
    console.log(name, password)
    $.ajax({
        method: 'POST',//GET请求无法将data传到url以外的东西
        url: '/register',
        contentType: 'text/json;charset=UTF-8',
        data: JSON.stringify({ name, password })
    }).then(() => {
        alert('注册成功')
        location.href = '/sign-in.html'
    }
        , () => { })//上传数据
})

