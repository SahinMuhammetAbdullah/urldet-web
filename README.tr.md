# URLDet - Web

![URLDet Logo](https://urldet.masahin.dev/android-icon-72x72.png)

[![MIT Lisansı](https://img.shields.io/badge/Lisans-MIT-green.svg)](LICENSE) [![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=white)](https://reactjs.org/) [![Web Sitesi](https://img.shields.io/badge/Web%20Sitesi-urldet.masahin.dev-blue?logo=googlechrome&logoColor=white)](https://urldet.masahin.dev) [![PR'lar Kabul Edilir](https://img.shields.io/badge/PR'lar-Kabul%20Edilir-brightgreen.svg)](./.github/CONTRIBUTING.md)

URLDet Web, URLDet projesinin React tabanlı ön yüz web sitesidir. Kullanıcıların herhangi bir URL'yi temiz bir arayüz üzerinden manuel olarak girip analiz etmesine, ayrıntılı tehdit raporlarını görüntülemesine ve proje hakkında daha fazla bilgi edinmesine olanak tanır. Canlı sürüme [urldet.masahin.dev](https://urldet.masahin.dev) adresinden ulaşılabilir.

[**Tarayıcı Eklentisini Görüntüle**](https://chromewebstore.google.com/detail/urldet-url-g%C3%BCvenlik-anali/phjancankjcbmdjcdlipmhlnjhljakjf) | [**Read in English (İngilizce Oku)**](./README.md)

## 🔗 İlgili Depolar

| Depo | Açıklama |
|---|---|
| [**urldet-extension**](https://github.com/SahinMuhammetAbdullah/urldet-extension) | URL analizini Google arama sonuçlarına entegre eden Chrome eklentisi |
| [**urldet-web**](https://github.com/SahinMuhammetAbdullah/urldet-web) | React tabanlı web sitesi (bu depo) |
| [**urldet-api**](https://github.com/SahinMuhammetAbdullah/urldet-api) | ML tabanlı URL analiz motorunu çalıştıran Flask backend API'si |

## ✨ Özellikler

- **Manuel URL Analizi:** Herhangi bir URL girin ve anında ayrıntılı bir güvenlik raporu alın.
- **Ayrıntılı Sonuçlar:** Risk puanlarını, tehdit kategorilerini ve analiz dökümlerini görüntüleyin.
- **Çok Dil Desteği:** Arayüz İngilizce ve Türkçe olarak mevcuttur.
- **Açık & Koyu Mod:** Günün her saatinde rahat bir görüntüleme deneyimi.
- **Duyarlı Tasarım:** Masaüstü ve mobil tarayıcılarda sorunsuz çalışır.

## 🛠️ Kullanılan Teknolojiler

- **Framework:** [React](https://reactjs.org/)
- **Derleme Aracı:** [Vite](https://vitejs.dev/)
- **Arka Uç (API):** [URLDet Flask API](https://github.com/SahinMuhammetAbdullah/urldet-api)

## 🚀 Başlarken

Yerel geliştirme ortamını çalıştırmak için şu adımları izleyin.

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18 veya üzeri) ve npm
- Çalışan bir [URLDet Flask API](https://github.com/SahinMuhammetAbdullah/urldet-api) örneği

### Kurulum

1. **Depoyu klonlayın:**
   ```sh
   git clone https://github.com/SahinMuhammetAbdullah/urldet-web.git
   ```
2. **Proje dizinine gidin:**
   ```sh
   cd urldet-web
   ```
3. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   ```
4. **Geliştirme sunucusunu başlatın:**
   ```sh
   npm run dev
   ```
5. Tarayıcınızı açın ve `http://localhost:5173` adresine gidin.

### Üretim için Derleme

```sh
npm run build
```

Çıktı, herhangi bir statik dosya sunucusu tarafından sunulmaya hazır şekilde `dist/` klasörüne yerleştirilecektir.

## 🤝 Katkıda Bulunma

Katkılar memnuniyetle karşılanır. Davranış kuralları ve pull request gönderme süreci hakkında ayrıntılar için [`CONTRIBUTING.md`](./.github/CONTRIBUTING.md) dosyasına bakın.

## 📜 Lisans

Bu proje MIT Lisansı kapsamında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

Muhammet Abdullah Şahin - [GitHub Profili](https://github.com/SahinMuhammetAbdullah)

Proje Bağlantısı: [https://github.com/SahinMuhammetAbdullah/urldet-web](https://github.com/SahinMuhammetAbdullah/urldet-web)