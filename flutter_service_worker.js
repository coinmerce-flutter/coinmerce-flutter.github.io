'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "8d18e5523aab873c7b306e3c5e296999",
"/": "8d18e5523aab873c7b306e3c5e296999",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "8d0e7740135c55e276e24a5abe828ef3",
"manifest.json": "244e2e19750c89a37b74c4ed2e709f2e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "9df4206ef8fcb1e199e7b85b93679009",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/assets/ic_back.png": "40645a835672106f51ace952866e0fe3",
"assets/assets/coinmerce-logo.png": "0c0213c3910614b12e302752d8bf2ac2",
"assets/assets/ic_more.png": "a06f0707a53f46cbd6cdf45315ed8563",
"assets/assets/ic_arrow-black.png": "1520febdd3cb688141dc160c86cf063f",
"assets/assets/ic_plus.png": "3e0f11c8466bdf6e278f2143fd999363",
"assets/assets/1.5x/ic_back.png": "fe38004720472a306e88e2aaef00d6f5",
"assets/assets/1.5x/coinmerce-logo.png": "5874aa17012fe48cc8e3878a9c97576e",
"assets/assets/1.5x/ic_more.png": "9e8433271ecdd9dc211b7490a25db2cf",
"assets/assets/1.5x/ic_arrow-black.png": "7d74496261af4110b99f2549b7773258",
"assets/assets/1.5x/ic_plus.png": "745d4c3541a23fd032671d9f2565dda1",
"assets/assets/1.5x/ic_close_blue.png": "43c887a2e40d367bf55554dd6fbd858c",
"assets/assets/1.5x/ic_check_grey.png": "6ac6f06832646edbf4f161693d12af3c",
"assets/assets/1.5x/ic_arrow_blue.png": "808c1c187adb34b217d305d2f62cdb7f",
"assets/assets/1.5x/All%2520button.png": "6f43ad52bb4f062d4da0fa42ad3b407a",
"assets/assets/1.5x/ic_eye.png": "e0ae4635c22498bbf1773a1c92d9ca1d",
"assets/assets/1.5x/ic_search.png": "0664f75f473165a6a22fc28ce30e4bba",
"assets/assets/1.5x/ic_dropdown.png": "b296927aac7c42774f18d7fb6ba5b16b",
"assets/assets/ic_close_blue.png": "548b8be718149ac3bbded24752da3fed",
"assets/assets/ic_check_grey.png": "508408ca283ceaa1b7376b87908041a6",
"assets/assets/Tabbar/Rewards.png": "144487230cc2161e66bc4d789ae81d0e",
"assets/assets/Tabbar/Coins.png": "87f9b2f914c4cdf416d995fbcd6162a7",
"assets/assets/Tabbar/Menu.png": "fd6ac4d9c2ef4c7ccf250719e0ef70fa",
"assets/assets/Tabbar/Orders.png": "49604e1eaf800afed5a82e2db2e11ca1",
"assets/assets/Tabbar/Home.png": "48293490bec146da33912f6c8fec4d9d",
"assets/assets/ic_arrow_blue.png": "3a86196dfe0b2c080ce4912ef426f7a9",
"assets/assets/All%2520button.png": "4b0df0c556948d0bfc047a7b3e2f6506",
"assets/assets/4x/ic_back.png": "f8f3d2e5c075a680ef05d04c73b4d48c",
"assets/assets/4x/coinmerce-logo.png": "65e54970657db72192232a4ca29dfe73",
"assets/assets/4x/ic_more.png": "c83273783fb10d0eb5d3f3fdbdea25f4",
"assets/assets/4x/ic_arrow-black.png": "3b46f731452a7e25ba0494b20bcf846f",
"assets/assets/4x/ic_plus.png": "5cbb6e6035a42290b9d8e24c6bdddecf",
"assets/assets/4x/ic_close_blue.png": "6f0f4f9e657b7faf3f4ee3d1b911076f",
"assets/assets/4x/ic_check_grey.png": "406bd1082790b81efecb7b26618ceb31",
"assets/assets/4x/ic_arrow_blue.png": "47573fce17b9f18ddecca577584bde57",
"assets/assets/4x/All%2520button.png": "4e19dad2556a9e8a5011f1299cd41209",
"assets/assets/4x/ic_eye.png": "94a83ccb1c86c68615605a0ce02089dc",
"assets/assets/4x/ic_search.png": "56ef5a28b55fa7708d56f51b08f9fbb8",
"assets/assets/4x/ic_dropdown.png": "38b7a230c22917785478610ec7584c79",
"assets/assets/2x/ic_back.png": "d2e650b44f29982722bbff682c6cb12a",
"assets/assets/2x/coinmerce-logo.png": "7ed6bcee25fd82abea2eb6b58367332d",
"assets/assets/2x/ic_more.png": "bf07a49930d84f0ca49610dad312623c",
"assets/assets/2x/ic_arrow-black.png": "3be382bcf75fa1d4951eeb0e9dabb1aa",
"assets/assets/2x/ic_plus.png": "715f4f73ad45427f55dc073deb913bb7",
"assets/assets/2x/ic_close_blue.png": "89153f0ab4b168d7398fdc740a2ffd21",
"assets/assets/2x/ic_check_grey.png": "34bae62a6cdf2b094aecb8980ff07ed2",
"assets/assets/2x/ic_arrow_blue.png": "9e70fcffee4c144ca5dbd77b05c41255",
"assets/assets/2x/All%2520button.png": "93e5cc89b3c99bc80225d618ea07c221",
"assets/assets/2x/ic_eye.png": "5eeaaac46086533785c5320badf9545f",
"assets/assets/2x/ic_search.png": "cedc9b3083c7520f8aa2da60b40ded6a",
"assets/assets/2x/ic_dropdown.png": "27cefa0b75f18b714b653f4c401055e6",
"assets/assets/ic_eye.png": "8411c1e38658054dc6c07178fe50aae8",
"assets/assets/Menu/News.png": "a42a34f5e08cb6685d56a0c74d1f3622",
"assets/assets/Menu/Learn.png": "5484e3616ce65afba10687748d406a72",
"assets/assets/Menu/help.png": "2a9bf24f5433b0a6e4e90f61e52c40a5",
"assets/assets/Menu/About.png": "a5d61520dc7f2f5659866ebbf6194b49",
"assets/assets/Menu/logout.png": "f263d5d7cde3e50eddbf47a5ae299717",
"assets/assets/Menu/MyAccount.png": "38eeb6d2250ca3d3f8c160dd88f28aa6",
"assets/assets/ic_search.png": "88d2f2b44b9d0c8928cec0bec4502664",
"assets/assets/3x/ic_back.png": "81da2d5dfe362526a08b162d9464c5ea",
"assets/assets/3x/coinmerce-logo.png": "23d0d8893a69492afb2ace278fb9a241",
"assets/assets/3x/ic_more.png": "cd0c82bd689f4d4b16ec455a137e869c",
"assets/assets/3x/ic_arrow-black.png": "7bcfebbbe6232bba074ba26219265871",
"assets/assets/3x/ic_plus.png": "4a73a225900fce4d8eded405e44bc109",
"assets/assets/3x/ic_close_blue.png": "f572910a5caa9c170c7f02ceb50d0588",
"assets/assets/3x/ic_check_grey.png": "c9594d9f10030dede5d31fdf5d9ed970",
"assets/assets/3x/ic_arrow_blue.png": "28aab9af977acf3213b2a3de246e7a88",
"assets/assets/3x/All%2520button.png": "dbceb2548fe2b2e91be5587a240467b2",
"assets/assets/3x/ic_eye.png": "47b3fc4029de28343d5fb9ae6ebf245c",
"assets/assets/3x/ic_search.png": "0920479013c0f292f6d72a0099816507",
"assets/assets/3x/ic_dropdown.png": "2b0f088e819aa601bec52cb5b64f7d12",
"assets/assets/ic_dropdown.png": "89f7a9e29f9c3c304ac0f1d4f29e4d4c",
"assets/assets/Icon/CoinDown.png": "2a8296eef355af0a0bb0b43f2b23b4ab",
"assets/assets/Icon/CoinUp.png": "906d7f2020d918f3d5b052e0660eb136"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
