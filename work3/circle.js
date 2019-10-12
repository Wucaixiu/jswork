var r =prompt('请输入圆的半径')
r = parseFloat(r)&&Number(r)
if (!NaN(r)){
    var cir = 2 * Math.PI * r
    var area = Math.PI * r 
    document.getElementById('r').value = r 
    document.getElementById('cir').value = cir.toFixed(2)
    document.getElementById('area').value = area.toFixed(2)
}