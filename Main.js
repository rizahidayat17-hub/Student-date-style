const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const detailCard = document.getElementById('detailCard');

// 1. Event listener saat mengetik
searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  searchResults.innerHTML = '';

  if (query === '') {
    return;
  }

  // Filter nama mahasiswa yang mengandung teks input
  const filteredData = dataMahasiswa.filter(mhs => 
    mhs.nama.toLowerCase().includes(query)
  );

  // Tampilkan list nama yang cocok
  filteredData.forEach(mhs => {
    const li = document.createElement('li');
    li.textContent = mhs.nama;
    
    // 2. Event listener saat item list diklik
    li.addEventListener('click', () => {
      tampilkanDetail(mhs);
      searchResults.innerHTML = ''; // Sembunyikan daftar hasil
      searchInput.value = mhs.nama; // Isi input dengan nama yang dipilih
    });

    searchResults.appendChild(li);
  });
});

// Fungsi menampilkan data ke detail card
function tampilkanDetail(mhs) {
  document.getElementById('detailNama').textContent = mhs.nama;
  document.getElementById('detailNim').textContent = mhs.nim;
  document.getElementById('detailJurusan').textContent = mhs.jurusan;
  
  detailCard.classList.remove('hidden');
    }
