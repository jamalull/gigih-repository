// Create Database and using it.
// use tokoplay;

//Create Collection with name videolist.
db.createCollection('videolists');

//Create content data on the videolist collection.
db.videolists.insertMany(
  [
    {
      "videoId" : 123,
      "thumbnail" : "https://nowpalembang.com/wp-content/uploads/2022/06/toko-sepatu-palembang-2.jpeg",
      "altImage" : "Toko-sepatu"
    },
    {
      "videoId" : 456,
      "thumbnail" : "https://images.tokopedia.net/img/cache/850/BgtCLw/2021/12/17/131318ef-067c-4b85-b25c-2a0ccc479cd3.jpg?ect=4g",
      "altImage" : "Toko-tas"
    },
    {
      "videoId" : 789,
      "thumbnail" : "https://www.blibli.com/friends-backend/wp-content/uploads/2022/12/B110679-cover-scaled.jpg",
      "altImage" : "Toko-mainan"
    },
    {
      "videoId" : 101,
      "thumbnail" : "https://images.tokopedia.net/img/cache/850/BgtCLw/2022/5/9/4eb9a3c5-36e2-4207-9f2c-acb5100cad2d.jpg?ect=4g",
      "altImage" : "Toko-boneka"
    },
    {
      "videoId" : 112,
      "thumbnail" : "https://beritabojonegoro.com/imageoptim/58c20643-foto-outlet-baju.lg.jpg",
      "altImage" : "Toko-pakaian"
    },
    {
      "videoId" : 114,
      "thumbnail" : "https://www.sahabat-ukm.com/wp-content/uploads/2021/03/cahaya-sahabat-ukm-collection-2-1024x768-1.jpg",
      "altImage" : "Toko-sandal"
    },
    {
      "videoId" : 117,
      "thumbnail" : "https://inspirensis.id/data/media/2021/09/Jewelry-Store.jpg",
      "altImage" : "Toko-perhiasan"
    },
    {
      "videoId" : 113,
      "thumbnail" : "https://968kpfm.co.id/uploads/lifestyle/1635165502.jpg",
      "altImage" : "Toko-kecantikan"
    },
    {
      "videoId" : 118,
      "thumbnail" : "https://sukangulik.com/wp-content/uploads/2023/03/Toko-Komputer-Blora.jpeg",
      "altImage" : "Toko-komputer"
    },
    {
      "videoId" : 119,
      "thumbnail" : "https://asset-2.tstatic.net/kaltim/foto/bank/images/toko-buku-ilustrasi-balikpapan.jpg",
      "altImage" : "Toko-buku"
    },
  ]
);


//Create Collection with name productlist.
db.createCollection('productlists');

db.productlists.insertMany(
  [
    {
      "productId" : 321,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Pink",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 773,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Hitam",
      "price" : 48000,
      "videoId" : 456
    },
    {
      "productId" : 558,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Cokelat",
      "price" : 38000,
      "videoId" : 456
    },
    {
      "productId" : 997,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Biru",
      "price" : 48000,
      "videoId" : 456
    },
    {
      "productId" : 668,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Merah",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 321,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Putih",
      "price" : 68000,
      "videoId" : 456
    },
    {
      "productId" : 223,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Abu-abu",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 225,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Hijau",
      "price" : 38000,
      "videoId" : 456
    },
    {
      "productId" : 334,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Kuning",
      "price" : 58000,
      "videoId" : 456
    },
    {
      "productId" : 665,
      "linkProduct" : "https://www.tokopedia.com/find/tas",
      "title" : "Tas Maroon",
      "price" : 78000,
      "videoId" : 456
    },
  ]
);

//Create Collection with name videolist.
db.createCollection('commentlists');

db.commentlists.insertMany(
  [
    {
      "username" : "Putri Kinan",
      "comment" : "Berapa harga produk nya kak ? Aku mau checkout nnihh",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Aura Kinan",
      "comment" : "Berapa harga produk nya kak ? Aku mau COD nnihh",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
    {
      "username" : "Wardah Hann",
      "comment" : "Berapa lama pengiriman ke Bandung kak ? Aku mau checkout nnihh",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Aurorra",
      "comment" : "Produk nya ready kan stok nya kak ?",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
    {
      "username" : "Miya",
      "comment" : "Apakah ada garansi jika produk rusak kak ?",
      "timestamp" : new Date(),
      "videoId" : 456
    },
    {
      "username" : "Eudora",
      "comment" : "Live sampe jam berapa kak ?",
      "timestamp" : new Date(),
      "videoId" : 456 
    },
  ]
);
