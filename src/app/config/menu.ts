import {ActionCode} from './actionCode';
import {Menu} from '@core/services/types';
import {InjectionToken} from "@angular/core";

/*定义菜单*/
export const MENU_TOKEN = new InjectionToken<Menu[]>('menu-token', {
  providedIn: 'root', factory(): Menu[] {
    return menuNav;
  }
})

const menuNav: Menu[] = [

  {
    title: 'Dashboard',
    showIcon: true,
    icon: 'dashboard',
    open: false,
    selected: false,
    path: '/default/dashboard',
    actionCode: ActionCode.UserManage,
    children: [
      {
        title: '分析页',
        open: false,
        showIcon: true,
        icon: "fund",
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/dashboard/analysis',
      },
      {
        title: '监控页',
        open: false,
        icon: "fund",
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/dashboard/monitor',
      },
      {
        title: '工作台',
        open: false,
        icon: "appstore",
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/dashboard/workbench',
      },
    ]
  },
  {
    title: '页面',
    icon: 'appstore',
    open: false,
    actionCode: ActionCode.UserManage,
    selected: false,
    showIcon: true,
    path: '/default/page-demo',
    children: [
      {
        title: '表单页',
        icon: 'form',
        open: false,
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/form',
        children: [
          {
            title: '基础表单',
            open: false,
            selected: false,
            showIcon: false,
            icon: 'form',
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/form/base-form',
          },
          {
            title: '分步表单',
            open: false,
            showIcon: false,
            selected: false,
            actionCode: ActionCode.UserManage,
            icon: 'form',
            path: '/default/page-demo/form/step-form',
          },
          {
            title: '高级表单',
            open: false,
            showIcon: false,
            selected: false,
            actionCode: ActionCode.UserManage,
            icon: 'form',
            path: '/default/page-demo/form/advanced-form',
          },
        ]
      },
      {
        title: '列表页',
        icon: 'table',
        open: false,
        selected: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/list',
        children: [
          {
            title: '搜索列表',
            open: false,
            selected: false,
            actionCode: ActionCode.UserManage,
            icon: 'table',
            showIcon: false,
            path: '/default/page-demo/list/search-list',
            children: [
              {
                title: '搜索列表(文章）',
                open: false,
                selected: false,
                icon: 'table',
                showIcon: false,
                actionCode: ActionCode.UserManage,
                path: '/default/page-demo/list/search-list/article',
              },
              {
                title: '搜索列表(项目)',
                open: false,
                selected: false,
                icon: 'table',
                showIcon: false,
                actionCode: ActionCode.UserManage,
                path: '/default/page-demo/list/search-list/project',
              },
              {
                title: '搜索列表(应用)',
                open: false,
                selected: false,
                icon: 'table',
                showIcon: false,
                actionCode: ActionCode.UserManage,
                path: '/default/page-demo/list/search-list/application',
              },
            ]
          },
          {
            title: '查询表格',
            open: false,
            selected: false,
            icon: 'table',
            showIcon: true,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/list/search-table',
          },
          {
            title: '树状表格',
            open: false,
            selected: false,
            icon: 'table',
            showIcon: true,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/list/tree-list',
          },
          {
            title: '标准表格',
            open: false,
            selected: false,
            icon: 'table',
            showIcon: true,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/list/standard-table',
          },
          {
            title: '卡片列表',
            open: false,
            selected: false,
            icon: 'table',
            showIcon: true,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/list/card-table',
          },
        ]
      },
      {
        title: '详情页',
        icon: 'profile',
        open: false,
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/detail',
        children: [
          {
            title: '基础详情页',
            open: false,
            selected: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            icon: 'profile',
            path: '/default/page-demo/detail/base-detail',
          },
          {
            title: '高级详情页',
            open: false,
            showIcon: false,
            selected: false,
            actionCode: ActionCode.UserManage,
            icon: 'profile',
            path: '/default/page-demo/detail/adv-detail',
          },
        ]
      },
      {
        title: '结果页',
        icon: 'check-circle',
        open: false,
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/result',
        children: [
          {
            title: '成功页',
            open: false,
            selected: false,
            showIcon: false,
            icon: 'check-circle',
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/result/success',
          },
          {
            title: '失败页',
            open: false,
            selected: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            icon: 'check-circle',
            path: '/default/page-demo/result/fail',
          },
        ]
      },
      {
        title: '异常页',
        icon: 'warning',
        open: false,
        selected: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/except',
        children: [
          {
            title: '403',
            open: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            selected: false,
            icon: 'warning',
            path: '/default/page-demo/except/except403',
          },
          {
            title: '404',
            open: false,
            selected: false,
            icon: 'warning',
            showIcon: false,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/except/except404',
          },
          {
            title: '500',
            open: false,
            selected: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            icon: 'warning',
            path: '/default/page-demo/except/except500',
          },
        ]
      },
      {
        title: '个人页',
        icon: 'user',
        open: false,
        selected: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        path: '/default/page-demo/personal',
        children: [
          {
            title: '个人中心',
            open: false,
            selected: false,
            icon: 'user',
            showIcon: false,
            actionCode: ActionCode.UserManage,
            path: '/default/page-demo/personal/personal-center',
          },
          {
            title: '个人设置',
            open: false,
            actionCode: ActionCode.UserManage,
            selected: false,
            icon: 'user',
            showIcon: false,
            path: '/default/page-demo/personal/personal-setting',
          },
        ]
      },
      {
        title: '图形编辑器',
        icon: '',
        alIcon: 'icon-mel-help',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/page-demo/flow',
        children: [
          {
            title: '流程图',
            open: false,
            selected: false,
            icon: 'highlight',
            showIcon: true,
            path: '/default/page-demo/flow/flow-chat',
            actionCode: ActionCode.UserManage,
          },
        ]
      },
    ]
  },
  {
    title: '功能',
    icon: 'star',
    open: false,
    actionCode: ActionCode.UserManage,
    selected: false,
    showIcon: true,
    path: '/default/feat',
    children: [
      {
        title: '消息提示',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/msg',
      },
      {
        title: '图标',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/icons',
      },
      {
        title: '右键菜单',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/context-menu',
      },
      {
        title: '图片预览',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/img-preview',
      },
      {
        title: '全屏',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/full-screen',
      },
      {
        title: '标签页操作',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/tabs',
      },
      {
        title: '拖拽modal',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/ex-modal',
      },
      {
        title: '封装抽屉',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/ex-drawer',
      },
      {
        title: '富文本',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/rich-text',
      },
      {
        title: 'clickOutSide',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/click-out-side',
      },
      {
        title: '滚动条',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/scroll',
        children: [
          {
            title: '缓存滚动条',
            icon: 'dashboard',
            open: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            selected: false,
            path: '/default/feat/scroll/keep-scroll-page',
          },
          {
            title: '玩弄滚动条',
            icon: 'dashboard',
            open: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            selected: false,
            path: '/default/feat/scroll/play-scroll',
          }
        ]
      },
      {
        title: '地图',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/map',
        children: [
          {
            title: '高德',
            open: false,
            selected: false,
            icon: 'highlight',
            showIcon: false,
            path: '/default/feat/map/gaode',
            actionCode: ActionCode.UserManage,
          },
        ]
      },
      {
        title: '其他登录方式',
        icon: 'dashboard',
        open: false,
        actionCode: ActionCode.UserManage,
        selected: false,
        showIcon: true,
        path: '/blank/other-login',
        children: [
          {
            title: '第一种',
            open: false,
            selected: false,
            icon: 'highlight',
            showIcon: false,
            path: '/blank/other-login/login1',
            actionCode: ActionCode.UserManage,
          },
        ]
      },

      {
        title: '颜色选择器',
        icon: 'usergroup-delete',
        actionCode: ActionCode.UserManage,
        open: false,
        selected: false,
        showIcon: true,
        path: '/default/feat/color-sel',
      },
      {
        title: '水波纹',
        icon: 'usergroup-delete',
        actionCode: ActionCode.UserManage,
        open: false,
        selected: false,
        showIcon: true,
        path: '/default/feat/ripple',
      },
      {
        title: '剪切板',
        icon: 'usergroup-delete',
        actionCode: ActionCode.UserManage,
        open: false,
        selected: false,
        showIcon: true,
        path: '/default/feat/copy',
      },
      {
        title: '空白页',
        icon: 'usergroup-delete',
        actionCode: ActionCode.UserManage,
        open: false,
        selected: false,
        showIcon: true,
        path: '/blank/empty-page',
      },
      {
        title: '外部链接',
        icon: 'usergroup-delete',
        open: false,
        actionCode: ActionCode.UserManage,
        selected: false,
        showIcon: true,
        path: 'https://github.com/huajian123/ng-ant-admin',
        isNewLink: true,
      },
      {
        title: '引导页',
        alIcon:'icon-medium',
        showIcon: true,
        open: false,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/feat/setup',
      },
    ]
  },
  {
    title: '组件',
    icon: 'star',
    open: false,
    actionCode: ActionCode.UserManage,
    selected: false,
    showIcon: true,
    path: '/default/comp',
    children: [
      {
        title: '基础组件',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/basic',
      },
      {
        title: '动画组件',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/transition',
      },
      {
        title: '在线excel',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/luckysheet',
      },
      {
        title: '组件懒加载',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/lazy',
        children: [
          {
            title: '基础懒加载组件',
            icon: 'dashboard',
            open: false,
            showIcon: true,
            actionCode: ActionCode.UserManage,
            selected: false,
            path: '/default/comp/lazy/lazy-basic',
          }
        ]
      },
      {
        title: '详情组件',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/desc',
      },
      {
        title: '密码强度校验组件',
        icon: 'dashboard',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/comp/strength-meter',
      },
    ]
  },


  {
    title: '多级菜单',
    icon: 'menu',
    open: false,
    selected: false,
    showIcon: true,
    actionCode: ActionCode.UserManage,
    path: '/default/level',
    children: [
      {
        title: 'Menu1',
        icon: 'menu',
        open: false,
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/level/menu1',
        children: [
          {
            title: 'Menu1-1',
            icon: 'menu',
            open: false,
            selected: false,
            showIcon: false,
            actionCode: ActionCode.UserManage,
            path: '/default/level/menu1/menu1-1',
            children: [
              {
                title: 'Menu1-1-1',
                icon: 'menu',
                open: false,
                selected: false,
                showIcon: false,
                actionCode: ActionCode.UserManage,
                path: '/default/level/menu1/menu1-1/menu1-1-1',
              },
              {
                title: 'Menu1-1-2',
                icon: 'menu',
                open: false,
                showIcon: false,
                selected: false,
                actionCode: ActionCode.UserManage,
                path: '/default/level/menu1/menu1-1/menu1-1-2',
              },
            ]
          },
          {
            title: 'Menu1-2',
            icon: 'menu',
            open: false,
            showIcon: false,
            selected: false,
            actionCode: ActionCode.UserManage,
            path: '/default/level/menu1/menu1-2',
          }
        ]
      },
      {
        title: 'Menu2',
        icon: 'menu',
        open: false,
        showIcon: true,
        selected: false,
        actionCode: ActionCode.UserManage,
        path: '/default/level/menu2',
      },
    ]
  },


 /* {
    title:'系统管理',
    icon: '',
    alIcon: 'icon-mel-help',
    open: false,
    showIcon: true,
    actionCode: ActionCode.UserManage,
    selected: false,
    path: '/default/system',
    children:[
      {
        title:'部门管理',
        icon: '',
        alIcon: 'icon-mel-help',
        open: false,
        showIcon: true,
        actionCode: ActionCode.UserManage,
        selected: false,
        path: '/default/system/dept',
      }
    ]
  },*/
  {
    title: '关于',
    alIcon:'icon-medium',
    showIcon: true,
    open: false,
    actionCode: ActionCode.UserManage,
    selected: false,
    path: '/default/about',
  },
];
