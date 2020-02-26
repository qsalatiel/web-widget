/**/ jsonp1578262779292873680({
  visitor: { id: "vst_v9z0n1g1evbtvgsufk99wigpk51fh585" },
  session: { id: "ssn_xwk1odxxg2x67otcoil2hkx6k51fh584" },
  customer: { id: null },
  page: { id: 6902294 },
  exclude: [],
  plugins: [
    {
      type: "promo-bar",
      campaign_id: 8625,
      settings: {
        message: "Subscribe for a discount coupon!",
        ch_theme: "none",
        ph_theme: "none",
        bf_theme: "none",
        pattern: "none",
        background_color: "#8622E2",
        text_color: "#FF9E00",
        action_button_background: "#00D58C",
        action_button_foreground: "#E1E4E8",
        close_enabled: true,
        timer_type: "relative",
        timer_end_relative: { day: 0, hour: 2, minute: 0 },
        timer_end_fixed: null,
        timeout_message: "Sorry, it\u0027s tool late!",
        action_type: "button",
        button_text: "Start shopping",
        button_link: null,
        email_input_text: "Email address",
        email_button_text: "Subscribe",
        email_subscription_success_message: "Thanks for subscribing!",
        phone_input_text: "Phone number",
        phone_button_text: "Subscribe",
        phone_subscription_success_message: "Thanks for subscribing!",
        push_down: true,
        remain_on_scroll: false,
        initial_delay: "0",
        device_rules: ["desktop", "tablet", "mobile"],
        page_rules: { include: [], exclude: [] },
        location_rules: { type: "include", list: [], test: [] },
        goal_type: { id: null, type: "funnel" },
        schedule_enabled: false,
        schedule_start: null,
        schedule_end: null
      },
      data: null
    },
    {
      type: "activity-popup",
      campaign_id: 8626,
      settings: {
        online_enabled: false,
        online_min: "1",
        online_content_first_line: "{{number}} people",
        online_content_second_line: "are online now",
        active_enabled: true,
        active_min: "1",
        active_content_first_line: "{{number}} people",
        active_content_second_line: "were recently active",
        watch_enabled: true,
        watch_min: "1",
        watch_content_first_line: "{{number}} people",
        watch_content_second_line: "are watching this product",
        order_enabled: true,
        order_lookback_count: "30",
        order_lookback_type: "day",
        order_min: "1",
        order_content_first_line: "{{number}} orders",
        order_content_second_line: "in last {{time}}",
        ch_theme: "none",
        bf_theme: "none",
        position: "bottom_left",
        round_corners: false,
        close_enabled: false,
        close_type: "current",
        animation_in: "slide",
        animation_out: "slide",
        sound_enabled: false,
        initial_delay: 15,
        delay_between: 15,
        showtime: 5,
        device_rules: ["desktop", "tablet", "mobile"],
        page_rules: { include: [], exclude: [] },
        location_rules: { type: "include", list: [], test: [] },
        goal_type: { id: null, type: "none" },
        schedule_enabled: false,
        schedule_start: null,
        schedule_end: null
      },
      data: {
        online: null,
        active: 2,
        watch: null,
        order: null,
        branding: true,
        branding_link:
          "https://nextsale.io/verified/c2FsYXRpZWwud29yazo5OTEzZDc5N2NiYTBlNWZiNGJhNTZjYmJmMTU3ZmNkZQ=="
      }
    },
    {
      type: "notification-tab",
      campaign_id: 8627,
      settings: {
        animation: "scrolling",
        first_message: {
          emoji: "\ud83d\ude4f",
          image_url:
            "https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f64f.png",
          message: "Please come back"
        },
        second_message: {
          emoji: "\ud83d\ude0a",
          image_url:
            "https://cdn.jsdelivr.net/emojione/assets/3.1/png/32/1f60a.png",
          message: "We really miss you..."
        },
        device_rules: ["desktop", "tablet", "mobile"],
        page_rules: { include: [], exclude: [] },
        location_rules: { type: "include", list: [], test: [] },
        goal_type: { id: null, type: null },
        schedule_enabled: false,
        schedule_start: null,
        schedule_end: null
      },
      data: null
    }
  ]
});
