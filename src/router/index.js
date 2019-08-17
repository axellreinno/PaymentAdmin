import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () =>
  import('@/containers/DefaultContainer')

// Views - Auth
const SignIn = () =>
  import('@/views/pages/auth/SignIn');

const SignInVerify = () =>
  import('@/views/pages/auth/SignInVerify');

const SignUp = () =>
  import('@/views/pages/auth/SignUp');

// const SignUpProfileSetup = () =>
//   import('@/views/pages/auth/SignUpProfileSetup');

const SignUpVerify = () =>
  import('@/views/pages/auth/SignUpVerify');

// Views - Dashboard
const Dashboard = () =>
  import('@/views/pages/dashboard/Dashboard')

// Views - Dashboard
const TransactionHistory = () =>
  import('@/views/pages/member/TransactionHistory')


// Views - Saldo
const Topup = () =>
  import('@/views/pages/balance/Topup')

// Views - Transfer
// const BalanceTransfer = () =>
//   import('@/views/pages/transfer/BalanceTransfer')

// const MerchantBill = () =>
//   import('@/views/pages/transfer/MerchantBill')

// Views - Beli
const Pulsa = () =>
  import('@/views/pages/buy/Pulsa')

// const PaketData = () =>
//   import('@/views/pages/buy/PaketData')

// const TokenPLN = () =>
//   import('@/views/pages/buy/TokenPLN')


// Views - Bayar
// const PLNBill = () =>
//   import('@/views/pages/pay/PLNBill')

// const PDAMBill = () =>
//   import('@/views/pages/pay/PDAMBill')

// const IndihomeBill = () =>
//   import('@/views/pages/pay/IndihomeBill')

// const TelkomBill = () =>
//   import('@/views/pages/pay/TelkomBill')

// const PostPaidCardBill = () =>
//   import('@/views/pages/pay/PostPaidCardBill')

// const TSELHaloBill = () =>
//   import('@/views/pages/pay/TSELHaloBill')

// const FinanceBill = () =>
//   import('@/views/pages/pay/FinanceBill')

// const BPJSBill = () =>
//   import('@/views/pages/pay/BPJSBill')

// const TelevisionBill = () =>
//   import('@/views/pages/pay/TelevisionBill')



// Sedekah
// const Alms = () =>
//   import('@/views/pages/others/Alms')

//   // Sedekah
const Profile = () =>
import('@/views/pages/member/Profile')

// // Print
// const PrintBuy = () =>
//   import('@/views/pages/print/buy/PrintBuy')

// Print
const Error404 = () =>
  import('@/views/pages/error/Error404')



Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [{
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'riwayat-transaksi',
          name: 'TransactionHistory',
          component: TransactionHistory,
          meta: {
            requiresAuth: true
          }
        },
        // {
        //   path: 'sedekah',
        //   name: 'Alms',
        //   component: Alms,
        //   meta: {
        //     requiresAuth: true
        //   }
        // },
        {
          path: 'saldo',
          redirect: 'saldo/isi-saldo',
          name: 'Saldo',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
            path: 'isi-saldo',
            name: 'Topup',
            component: Topup,
            meta: {
              requiresAuth: true
            }
          }]
        },
        // {
        //   path: 'transfer',
        //   redirect: 'transfer/saldo',
        //   name: 'Transfer',
        //   component: {
        //     render(c) {
        //       return c('router-view')
        //     }
        //   },
        //   children: [{
        //     path: 'saldo',
        //     name: 'BalanceTransfer',
        //     component: BalanceTransfer,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'tagihan-merchant',
        //     name: 'MerchantBill',
        //     component: MerchantBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }]
        // },
        {
          path: 'beli',
          redirect: 'beli/pulsa',
          name: 'Beli',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [{
            path: 'pulsa',
            name: 'Pulsa',
            component: Pulsa,
            meta: {
              requiresAuth: true
            }
          }, 
          // {
          //   path: 'paket-data',
          //   name: 'PaketData',
          //   component: PaketData,
          //   meta: {
          //     requiresAuth: true
          //   }
          // }, 
          // {
          //   path: 'token-pln',
          //   name: 'TokenPLN',
          //   component: TokenPLN,
          //   meta: {
          //     requiresAuth: true
          //   }
          // }, 
          ]
        },
        // {
        //   path: 'bayar',
        //   redirect: 'bayar/pln',
        //   name: 'Bayar',
        //   component: {
        //     render(c) {
        //       return c('router-view')
        //     }
        //   },
        //   children: [{
        //     path: 'pln',
        //     name: 'PLNBill',
        //     component: PLNBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'pdam',
        //     name: 'PDAMBill',
        //     component: PDAMBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'indihome',
        //     name: 'IndihomeBill',
        //     component: IndihomeBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'telkom',
        //     name: 'TelkomBill',
        //     component: TelkomBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'kartu-pascabayar',
        //     name: 'PostPaidCardBill',
        //     component: PostPaidCardBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'tsel-halo',
        //     name: 'TSELHaloBill',
        //     component: TSELHaloBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'finance',
        //     name: 'FinanceBill',
        //     component: FinanceBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'asuransi-bpjs',
        //     name: 'BPJSBill',
        //     component: BPJSBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, {
        //     path: 'tv',
        //     name: 'TelevisionBill',
        //     component: TelevisionBill,
        //     meta: {
        //       requiresAuth: true
        //     }
        //   }, ]
        // },

      ]
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      name: 'Auth',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
        path: "signin",
        name: "SignIn",
        component: SignIn
      }, {
        path: "signin-verify",
        name: "SignInVerify",
        component: SignInVerify,
      }, {
        path: "signup",
        name: "SignUp",
        component: SignUp
      }, {
        path: "signup-verify",
        name: "SignUpVerify",
        component: SignUpVerify,
      }, ]
    },
    {
      path: '/page',
      name: 'Page',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [{
        path: "not-found",
        name: "PageNotFound",
        component: Error404
      }, ]
    },
    {
      path: '*',
      component: Error404
    }
  ]
})



export default router