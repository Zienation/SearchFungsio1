const dataMahasiswa = [
    { nim: "24051204053", nama: "Soma Zenwira WYW", dept: "Ketua Himpunan" },
    { nim: "24051204155", nama: "Kenzie Rofif Dhaniswara", dept: "Wakil Ketua Himpunan" },
    { nim: "24051204156", nama: "Desty Putri Puspitasari", dept: "BPH (Sekretaris 1)" },
    { nim: "25051204194", nama: "Zhafarina Amalia Nur S.", dept: "BPH (Sekretaris 2)" },
    { nim: "24051204112", nama: "Nuris Safira Rohmah", dept: "BPH (Bendahara 1)" },
    { nim: "25051204252", nama: "Salsabila Putri Ariska", dept: "BPH (Bendahara 2)" },
    { nim: "24051204125", nama: "Bee Nayaka Athalah Muchamad", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PENRISTEK)" },
    { nim: "25051204012", nama: "Nando Abdillah Salam", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PENRISTEK)" },
    { nim: "25051204042", nama: "Rihhadatul Aisyikin Mardhiyyah", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PENRISTEK)" },
    { nim: "25051204138", nama: "Hafizh Ahmad Yusuf", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PENRISTEK)" },
    { nim: "24051204119", nama: "Mahdi Ghani Afriza", dept: "Departemen Akademik, Keilmuan, dan IT (divisi KOMINFO)" },
    { nim: "25051204016", nama: "Muhammad Nur Fajri", dept: "Departemen Akademik, Keilmuan, dan IT (divisi KOMINFO)" },
    { nim: "25051204041", nama: "Azzarah Andina Rohmatul Izzah", dept: "Departemen Akademik, Keilmuan, dan IT (divisi KOMINFO)" },
    { nim: "25051204134", nama: "Achmad Krisna Nurvian Ananda", dept: "Departemen Akademik, Keilmuan, dan IT (divisi KOMINFO)" },
    { nim: "25051204029", nama: "Maria Elisabeth Siloy", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PE)" },
    { nim: "24051204111", nama: "Haidar Ali Yafi", dept: "Departemen Akademik, Keilmuan, dan IT (divisi PE)" },
    { nim: "24051204083", nama: "Alre Ahmad Satriawan", dept: "Departemen Hubungan Masyarakat (Divisi Luar Negeri)" },
    { nim: "25051204011", nama: "Albani Rasya Surya Saputra", dept: "Departemen Hubungan Masyarakat (Divisi Luar Negeri)" },
    { nim: "25051204137", nama: "Azizah Fairuz Dzakiyya", dept: "Departemen Hubungan Masyarakat (Divisi Luar Negeri)" },
    { nim: "24051204211", nama: "Davin Ridho Kurniawan", dept: "Departemen Hubungan Masyarakat (Divisi Dalam Negeri)" },
    { nim: "25051204105", nama: "Nur Rahman", dept: "Departemen Hubungan Masyarakat (Divisi Dalam Negeri)" },
    { nim: "25051204063", nama: "Shinta Nur’aini Dwi", dept: "Departemen Hubungan Masyarakat (Divisi Dalam Negeri)" },
    { nim: "25051204094", nama: "Muhammad Bahrul Ulum", dept: "Departemen PSDM (Pengembangan Sumber Daya Mahasiswa)" },
    { nim: "25051204225", nama: "Adinda Fatihadina Islamiah", dept: "Departemen PSDM (Pengembangan Sumber Daya Mahasiswa)" },
    { nim: "24051204157", nama: "M. Nabil Ridho Farabi", dept: "Departemen PSDM (Pengembangan Sumber Daya Mahasiswa)" },
    { nim: "24051204209", nama: "Reihan Alvarizy", dept: "Departemen PSDM (Pengembangan Sumber Daya Mahasiswa)" },
    { nim: "24051204228", nama: "Zikry Azizy Aljava", dept: "Departemen Kewirausahaan" },
    { nim: "25051204096", nama: "Nur Lailatul Ummah", dept: "Departemen Kewirausahaan" },
    { nim: "25051204008", nama: "Mohammad Naufal Wicaksono", dept: "Departemen Kewirausahaan" },
    { nim: "24051204150", nama: "Muhammad Hikmal Kurniah", dept: "Departemen Minat dan Bakat" },
    { nim: "25051204108", nama: "Aldi Abdurrahman Nafis", dept: "Departemen Minat dan Bakat" },
    { nim: "25051204212", nama: "Fikri Khair Rahmansyah", dept: "Departemen Minat dan Bakat" },
    { nim: "25051204243", nama: "Sahira Ramadani Fitrania", dept: "Departemen Minat dan Bakat" },
    { nim: "24051204158", nama: "Wildandy Dwi Ananda", dept: "Departemen Sosial dan Masyarakat" },
    { nim: "25051204135", nama: "M. Ilkliluddin Al Wafi", dept: "Departemen Sosial dan Masyarakat" },
    { nim: "25051204185", nama: "Rivana Adinda Putri", dept: "Departemen Sosial dan Masyarakat" },
];

function cariData() {
    const inputVal = document.getElementById('nimInput').value.trim();
    const resultWrapper = document.getElementById('resultWrapper');
    const errorMsg = document.getElementById('errorMessage');
    const welcomeName = document.getElementById('welcomeName');

    const mhs = dataMahasiswa.find(m => m.nim === inputVal);

    if (mhs) {
        welcomeName.innerText = mhs.nama;
        document.getElementById('resNim').innerText = mhs.nim;
        document.getElementById('resNama').innerText = mhs.nama;
        document.getElementById('resDept').innerText = mhs.dept;

        resultWrapper.style.display = "block";
        errorMsg.style.display = "none";

        spreadConfetti();
    } else {
        resultWrapper.style.display = "none";
        if (inputVal !== "") errorMsg.style.display = "block";
    }
}

function spreadConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#00D4FF', '#ffffff', '#0047AB']
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#00D4FF', '#ffffff', '#0047AB']
        }));
    }, 250);
}

document.getElementById("nimInput").addEventListener("keyup", (e) => {
    if (e.key === "Enter") cariData();
});