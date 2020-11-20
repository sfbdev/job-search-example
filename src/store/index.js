import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobList: {
      version: '1.0',
      statusCode: 200,
      result: {
        items: [{
          jobId: 'C71CD1954BA149BCAF42B25F775EA4LINKEDIN',
          positionName: 'Backend Developer',
          companyName: 'LinkedIn',
          detail: 'Şirketimiz bünyesinde görev almak üzere, devam etmekte olan projemizde yer alacak Laravel, Vue.js Junior Developer arayışımız mevcuttur.',
          durationDay: 0,
          durationDayText: 'Taze çıktı!',
          imageUrl: 'https://nepa.com/wp-content/uploads/2017/09/linkedin-logo.png',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityName: 'İstanbul',
          townName: 'Maslak',
        },
        {
          jobId: 'C71CD1954BA149BCAF42B25F775EA4KARIYER',
          positionName: 'Frontend Developer',
          companyName: 'Kariyer.net',
          detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
          durationDay: 0,
          durationDayText: '3 saat önce çıktı!',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwykT5QA8nXi1CGaX6pDAcZ28P7bTimf1EtKNdRoqUvnbaWEBa5Hd2OHACG6v75H_Yg46U0fwT5Ei84S75tmIqEqXaxmsoaYo&usqp=CAU&ec=45725304',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityName: 'İstanbul',
          townName: 'Ümraniye',
        },

        {
          jobId: 'C71CD1954BA149BCAF42B25F775EA4YEMEK',
          positionName: 'UI Designer',
          companyName: 'Yemeksepeti',
          durationDay: 0,
          detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
          durationDayText: '1 saat önce çıktı!',
          imageUrl: 'https://seeklogo.com/images/Y/yemek-sepeti-logo-0961A3A1FD-seeklogo.com.png',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityName: 'Ankara',
          townName: 'Etimesgut',
        },
        {
          jobId: 'C71CD1954BA149BCAF42B25F775EA4SAHIBINDEN',
          positionName: 'Product Manager',
          companyName: 'Sahibinden',
          durationDay: 0,
          detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
          durationDayText: '1 saat önce çıktı!',
          imageUrl: 'https://www.indirkey.com/wp-content/uploads/2018/09/sahibinden-logo.png',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityName: 'Bursa',
          townName: 'Mustafakemalpaşa',
        },
        {
          jobId: 'C71CD1954BA149BCAF42B25F775EA4SAHIBINDEN',
          positionName: 'Digital Marketing Specialist',
          companyName: 'Trendyol',
          durationDay: 0,
          detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
          durationDayText: '10 saat önce çıktı!',
          imageUrl: 'https://fionel.com.tr/wp-content/uploads/2019/09/trendyol-logo.png',
          distance: '8,53 km yakınında',
          latitude: 41.050968170166023,
          longitude: 29.062856674194339,
          cityName: 'İzmir',
          townName: 'Merkez',
        },
        ],

        total: 5,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
