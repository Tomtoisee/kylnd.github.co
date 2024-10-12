function goToLaman(lamanNumber) {
    // Sembunyikan semua laman
    var lamans = document.querySelectorAll('.laman');
    lamans.forEach(function(laman) {
        laman.style.display = 'none';
        laman.classList.remove('show');
    });

    // Tampilkan laman yang dimaksud
    var targetLaman = document.getElementById('laman' + lamanNumber);
    targetLaman.style.display = 'block';
    setTimeout(function() {
        targetLaman.classList.add('show');
    }, 50); // Delay sedikit untuk memberi efek animasi
}

function kirimPesan() {
    window.location.href = 'https://wa.me/6282289233095';
}

function malas() {
    alert('Tindakan ditolak. Reason: Atmin tidak suka itu');
}
