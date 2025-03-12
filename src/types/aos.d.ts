declare module 'aos' {
  interface AosOptions {
    /** 动画持续时间（毫秒） */
    duration?: number;
    /** 动画延迟（毫秒） */
    delay?: number;
    /** 动画是否只执行一次 */
    once?: boolean;
    /** 动画偏移（像素） */
    offset?: number;
    /** 动画缓动函数 */
    easing?: string;
    /** 锚点位置 */
    anchor?: string;
    /** 锚点位置 */
    anchorPlacement?: string;
    /** 禁用动画 */
    disable?: boolean;
    /** 开始动画的视口位置 */
    startEvent?: string;
    /** 初始化时的动画 */
    initClassName?: string;
    /** 动画类名 */
    animatedClassName?: string;
    /** 是否在移动设备上禁用 */
    disableMutationObserver?: boolean;
    /** 调试模式 */
    debounceDelay?: number;
    /** 节流延迟 */
    throttleDelay?: number;
  }

  interface Aos {
    /**
     * 初始化AOS
     * @param options 配置选项
     */
    init(options?: AosOptions): void;
    /**
     * 刷新所有AOS元素
     */
    refresh(): void;
    /**
     * 刷新所有AOS元素（硬刷新）
     */
    refreshHard(): void;
  }

  const aos: Aos;
  export default aos;
}

// 添加全局AOS对象声明
declare global {
  interface Window {
    AOS: import('aos').default;
  }
  const AOS: import('aos').default;
}