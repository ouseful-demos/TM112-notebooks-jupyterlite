(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2854,384],{42854:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s,l=a(67906),n=a(98838),o=a(80669),r=a(40093);!function(e){e.changeTheme="apputils:change-theme",e.themeScrollbars="apputils:theme-scrollbars"}(s||(s={}));const h={id:"@jupyterlite/apputils-extension:themes",autoStart:!0,provides:l.IThemeManager,requires:[o.ISettingRegistry],optional:[l.ISplashScreen],activate:(e,t,a)=>{const l=e.shell,o=e.commands,m=h.id,c=n.PageConfig.getOption("themesUrl"),d=new r.ThemeManager({key:m,host:l,settings:t,splash:null!=a?a:void 0,url:c});return d.themeChanged.connect(((e,t)=>{const a=t.newValue;document.body.dataset.jpThemeLight=String(d.isLight(a)),document.body.dataset.jpThemeName=a,document.body.dataset.jpThemeScrollbars!==String(d.themeScrollbars(a))&&(document.body.dataset.jpThemeScrollbars=String(d.themeScrollbars(a))),d.loadCSSOverrides(),o.notifyCommandChanged(s.changeTheme)})),o.addCommand(s.changeTheme,{label:e=>{const t=e.theme,a=d.getDisplayName(t);return e.isPalette?`Use Theme: ${a}`:a},isToggled:e=>void 0===e.theme,execute:e=>{const t=e.theme;if(t!==d.theme)return d.setTheme(t)}}),o.addCommand(s.themeScrollbars,{label:"Theme Scrollbars",isToggled:()=>d.isToggledThemeScrollbars(),execute:()=>d.toggleThemeScrollbars()}),d}},m=[h]}}]);
//# sourceMappingURL=2854.bundle.js.map