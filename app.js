function mostrareducacion() {
    document.getElementById('datos').style.display= 'none';
    document.getElementById('conocimientos').style.display= 'none';
    document.getElementById('experiencia').style.display= 'none';
    document.getElementById('educacion').style.display= 'block';
    document.getElementById('info').style.display= 'none';
}
function mostrarexperiencia() {
    document.getElementById('datos').style.display= 'none';
    document.getElementById('conocimientos').style.display= 'none';
    document.getElementById('educacion').style.display= 'none';
    document.getElementById('experiencia').style.display= 'block';
    document.getElementById('info').style.display= 'none';
}
function mostrarmisdatos() {
    document.getElementById('datos').style.display='flex';
    document.getElementById('conocimientos').style.display= 'none';
    document.getElementById('educacion').style.display= 'none';
    document.getElementById('experiencia').style.display= 'none';
    document.getElementById('info').style.display= 'none';
}
function mostrarinfoad() {
    document.getElementById('datos').style.display= 'none';
    document.getElementById('conocimientos').style.display= 'none';
    document.getElementById('experiencia').style.display= 'none';
    document.getElementById('educacion').style.display= 'none';
    document.getElementById('info').style.display= 'block';

}