export default {
  items: [{
    title: true,
    name: 'MENU',
    class: '',
    wrapper: {
      element: '',
      attributes: {}
    }
  }, {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home'
  }, {
    name: 'Riwayat Transaksi',
    url: '/riwayat-transaksi',
    icon: 'icon-puzzle'
  }, {
    name: 'Isi Saldo',
    url: '/saldo/isi-saldo',
    icon: 'icon-puzzle'
  }, {
    name: 'Transfer',
    url: '/transfer',
    icon: 'icon-puzzle',
    children: [{
        name: 'Transfer Saldo',
        url: '/transfer/saldo',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tagihan',
        url: '/transfer/tagihan-merchant',
        icon: 'icon-puzzle'
      },
    ]
  }, {
    name: 'Beli',
    url: '/beli',
    icon: 'icon-puzzle',
    children: [{
      name: 'Pulsa',
      url: '/beli/pulsa',
      icon: 'icon-puzzle'
    }, {
      name: 'Paket Data',
      url: '/beli/paket-data',
      icon: 'icon-puzzle'
    }, {
      name: 'Token PLN',
      url: '/beli/token-pln',
      icon: 'icon-puzzle'
    }, ]
  }, {
    name: 'Bayar',
    url: '/bayar',
    icon: 'icon-puzzle',
    children: [{
      name: 'PLN',
      url: '/bayar/pln',
      icon: 'icon-puzzle'
    }, {
      name: 'PDAM',
      url: '/bayar/pdam',
      icon: 'icon-puzzle'
    }, {
      name: 'IndiHome',
      url: '/bayar/indihome',
      icon: 'icon-puzzle'
    }, {
      name: 'Telkom',
      url: '/bayar/telkom',
      icon: 'icon-puzzle'
    }, {
      name: 'TSEL Halo',
      url: '/bayar/tsel-halo',
      icon: 'icon-puzzle'
    }, {
      name: 'Finance',
      url: '/bayar/finance',
      icon: 'icon-puzzle'
    }, {
      name: 'Asuransi BPJS',
      url: '/bayar/asuransi-bpjs',
      icon: 'icon-puzzle'
    }, {
      name: 'TV',
      url: '/bayar/tv',
      icon: 'icon-puzzle'
    }, ]
  }, {
    name: 'Sedekah',
    url: '/sedekah',
    icon: 'icon-puzzle'
  }, ]
}