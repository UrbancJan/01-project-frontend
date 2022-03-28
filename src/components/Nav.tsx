import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [showMobile, setMobile] = useState(false);
  function showMobileMenu() {
    if (showMobile == false) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }
  return (
    <nav className="navbar">
      <svg
        className="logo"
        width="116"
        height="24"
        viewBox="0 0 116 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M109.555 0.249977V6.48273H112.031C112.031 7.8586 111.059 9.55621 109.549 10.1262L110.167 11.4653C113.431 10.8156 115.759 8.4071 115.759 4.8556V0.249977H109.555ZM115.136 4.8556C115.136 7.77586 113.379 9.99134 110.515 10.7452V10.7421L110.365 10.4173C111.854 9.55008 112.648 7.82489 112.648 6.4766V5.85762H110.173V0.872027H115.133V4.8556H115.136ZM100.845 0.249977V6.48273H103.33C103.33 7.8586 102.358 9.55621 100.848 10.1262L101.466 11.4653C104.73 10.8156 107.049 8.4071 107.049 4.8556V0.249977H100.845ZM106.426 4.8556C106.426 7.77586 104.672 9.9944 101.817 10.7452L101.667 10.4203C103.153 9.55314 103.95 7.82795 103.95 6.47967V5.85762H101.466V0.872027H106.426V4.8556Z"
          fill="url(#paint0_linear_117_1460)"
        />
        <path
          d="M7.56101 23.6366C6.43022 23.6366 5.40334 23.4037 4.48343 22.938C3.56352 22.4722 2.76585 21.8501 2.09655 21.0749C1.42418 20.2965 0.907688 19.4171 0.547058 18.4335C0.180315 17.4498 0 16.4386 0 15.4029C0 14.3212 0.19254 13.2855 0.57762 12.3018C0.9627 11.3182 1.49753 10.4418 2.18518 9.6696C2.87282 8.90047 3.6766 8.29068 4.59651 7.84023C5.51642 7.38978 6.51885 7.16608 7.60686 7.16608C8.73765 7.16608 9.76452 7.40203 10.6844 7.87393C11.6044 8.34583 12.3959 8.98014 13.0622 9.77379C13.7253 10.5674 14.2388 11.453 14.6025 12.4275C14.9631 13.4019 15.1465 14.4039 15.1465 15.4243C15.1465 16.506 14.957 17.5418 14.5811 18.5254C14.2021 19.509 13.6703 20.3854 12.9857 21.1576C12.2981 21.9267 11.4943 22.5335 10.5744 22.9747C9.65145 23.416 8.64596 23.6366 7.56101 23.6366ZM7.58241 21.7827C8.44119 21.7827 9.21136 21.5989 9.88983 21.2342C10.5683 20.8665 11.1459 20.3793 11.6227 19.7695C12.0964 19.1597 12.4601 18.4733 12.7076 17.7103C12.9582 16.9473 13.0805 16.1781 13.0805 15.3998C13.0805 14.5755 12.9491 13.7788 12.6832 13.0097C12.4204 12.2405 12.0414 11.5572 11.5524 10.9627C11.0603 10.3683 10.4797 9.89636 9.81037 9.54397C9.13801 9.19464 8.39535 9.01691 7.57935 9.01691C6.72056 9.01691 5.9504 9.20077 5.27193 9.56542C4.59345 9.93007 4.01583 10.4204 3.53907 11.0301C3.06841 11.643 2.70167 12.3233 2.44495 13.0802C2.18823 13.834 2.05987 14.6092 2.05987 15.4029C2.05987 16.2272 2.19129 17.0239 2.45718 17.793C2.72001 18.5622 3.09592 19.2455 3.5788 19.84C4.06168 20.4344 4.64235 20.9063 5.32083 21.2587C5.9993 21.6081 6.75418 21.7827 7.58241 21.7827ZM8.49009 18.2159H10.4827L14.9876 23.5232H12.9949L8.49009 18.2159Z"
          fill="#322D38"
        />
        <path
          d="M17.4966 18.7705V11.6491H19.4892V18.3753C19.4892 19.5887 19.7001 20.4957 20.1218 21.1025C20.5436 21.7092 21.1701 22.0126 22.0014 22.0126C22.5454 22.0126 23.068 21.8961 23.5753 21.6602C24.0796 21.4273 24.538 21.0902 24.9445 20.652C25.351 20.2138 25.6688 19.6929 25.895 19.0862V11.6491H27.8876V21.2404C27.8876 21.4824 27.9365 21.6602 28.0343 21.7735C28.1321 21.8869 28.2941 21.9513 28.5203 21.9666V23.5233C28.2941 23.5539 28.1168 23.5723 27.9885 23.5815C27.8601 23.5876 27.7348 23.5937 27.6156 23.5937C27.2367 23.5937 26.9127 23.4773 26.6407 23.2413C26.3687 23.0054 26.2251 22.7143 26.2098 22.365L26.1639 20.9768C25.6505 21.8563 24.9598 22.5396 24.0918 23.0238C23.2239 23.5079 22.2765 23.75 21.2496 23.75C20.0118 23.75 19.0766 23.3302 18.444 22.4875C17.8114 21.6448 17.4966 20.4069 17.4966 18.7705Z"
          fill="#322D38"
        />
        <path
          d="M36.3748 23.75C35.4855 23.75 34.6756 23.5876 33.9543 23.2627C33.23 22.9379 32.6035 22.4905 32.0748 21.9237C31.5461 21.3568 31.1396 20.701 30.8523 19.9594C30.565 19.2179 30.4214 18.4396 30.4214 17.6214C30.4214 16.7879 30.565 16.0004 30.8523 15.2588C31.1396 14.5173 31.5461 13.8615 32.0748 13.2946C32.6035 12.7277 33.2331 12.2804 33.9635 11.9555C34.6939 11.6307 35.5069 11.4683 36.3962 11.4683C37.2703 11.4683 38.071 11.6307 38.7953 11.9555C39.5197 12.2804 40.1492 12.7277 40.6841 13.2946C41.2189 13.8615 41.6315 14.5173 41.9188 15.2588C42.2061 16.0004 42.3497 16.7879 42.3497 17.6214C42.3497 18.4396 42.2061 19.2179 41.9188 19.9594C41.6315 20.701 41.225 21.3568 40.6963 21.9237C40.1676 22.4905 39.538 22.9379 38.8076 23.2627C38.0771 23.5876 37.2672 23.75 36.3748 23.75ZM32.4599 17.6428C32.4599 18.4579 32.6371 19.1964 32.9916 19.8614C33.3462 20.5263 33.8168 21.0503 34.4067 21.4334C34.9965 21.8195 35.6505 22.0095 36.3748 22.0095C37.0992 22.0095 37.7593 21.8133 38.3553 21.4211C38.9512 21.0289 39.428 20.4957 39.7825 19.8246C40.137 19.1535 40.3143 18.4089 40.3143 17.5938C40.3143 16.7787 40.137 16.0402 39.7825 15.3753C39.428 14.7103 38.9512 14.1833 38.3553 13.791C37.7593 13.3988 37.0992 13.2027 36.3748 13.2027C35.6505 13.2027 34.9934 13.4019 34.4067 13.8033C33.8168 14.2047 33.3462 14.7348 32.9916 15.3998C32.6371 16.0647 32.4599 16.8124 32.4599 17.6428Z"
          fill="#322D38"
        />
        <path
          d="M50.705 22.9962C50.5399 23.0728 50.3138 23.1708 50.0265 23.2934C49.7392 23.416 49.4061 23.5232 49.0302 23.6121C48.6512 23.704 48.2539 23.75 47.8291 23.75C47.3462 23.75 46.9 23.6611 46.4935 23.4865C46.0871 23.3118 45.76 23.036 45.5186 22.6622C45.2772 22.2883 45.1549 21.8195 45.1549 21.2557V13.2272H43.5474V11.6491H45.1549V7.66862H47.1476V11.6491H49.7973V13.2272H47.1476V20.6397C47.1781 21.0657 47.3218 21.3844 47.5785 21.5897C47.8352 21.795 48.1378 21.8992 48.4831 21.8992C48.8743 21.8992 49.238 21.8317 49.5681 21.6939C49.9012 21.556 50.1182 21.4579 50.2251 21.3966L50.705 22.9962Z"
          fill="#322D38"
        />
        <path
          d="M51.6313 20.0912C51.6313 19.3343 51.8453 18.6786 52.2762 18.1239C52.7071 17.5693 53.297 17.1434 54.0518 16.84C54.8067 16.5366 55.6808 16.3865 56.6771 16.3865C57.2058 16.3865 57.7651 16.4294 58.3519 16.5121C58.9417 16.5948 59.4613 16.7205 59.9136 16.889V16.0249C59.9136 15.124 59.6416 14.4131 59.0976 13.8921C58.5536 13.3743 57.7835 13.1138 56.7902 13.1138C56.1423 13.1138 55.5188 13.2333 54.9229 13.4693C54.3269 13.7052 53.6973 14.0454 53.0341 14.4866L52.3098 13.0679C53.08 12.5347 53.8501 12.1332 54.6203 11.8667C55.3905 11.6001 56.1912 11.4652 57.0194 11.4652C58.5292 11.4652 59.7211 11.885 60.5951 12.7247C61.4692 13.5643 61.9093 14.7318 61.9093 16.2271V21.2403C61.9093 21.4824 61.9582 21.6601 62.056 21.7735C62.1538 21.8869 62.3158 21.9512 62.5419 21.9665V23.5232C62.3463 23.5538 62.1752 23.5753 62.0315 23.5906C61.8879 23.6059 61.7718 23.6121 61.6801 23.6121C61.2125 23.6121 60.861 23.4834 60.6288 23.2229C60.3965 22.9624 60.262 22.6897 60.2315 22.3986L60.1856 21.6448C59.6722 22.3159 58.9998 22.8337 58.1716 23.2014C57.3403 23.5661 56.5182 23.7499 55.7052 23.7499C54.9198 23.7499 54.2199 23.5875 53.5995 23.2627C52.9791 22.9379 52.4993 22.4967 52.1509 21.9451C51.8055 21.3905 51.6313 20.7745 51.6313 20.0912ZM59.3299 20.9277C59.5102 20.7163 59.6538 20.5018 59.7608 20.2812C59.8647 20.0636 59.9197 19.8767 59.9197 19.7265V18.2557C59.4521 18.0749 58.9601 17.9339 58.4497 17.8359C57.9363 17.7378 57.432 17.6888 56.9338 17.6888C55.9222 17.6888 55.1032 17.888 54.4767 18.2894C53.8501 18.6908 53.5384 19.2363 53.5384 19.9319C53.5384 20.3088 53.6393 20.6765 53.844 21.0289C54.0488 21.3843 54.3483 21.6754 54.7487 21.9022C55.149 22.1289 55.6441 22.2423 56.2309 22.2423C56.8483 22.2423 57.4381 22.1167 57.9974 21.8685C58.5506 21.6203 58.9968 21.3047 59.3299 20.9277Z"
          fill="#322D38"
        />
        <path
          d="M69.1525 23.7499C68.1715 23.7499 67.2515 23.5845 66.3897 23.2566C65.5309 22.9287 64.7882 22.4384 64.1709 21.7796L64.9411 20.3609C65.6195 21.0013 66.298 21.4579 66.9795 21.7337C67.658 22.0094 68.3518 22.1443 69.0608 22.1443C69.8768 22.1443 70.54 21.9911 71.0534 21.6816C71.5669 21.3721 71.8236 20.9185 71.8236 20.318C71.8236 19.8798 71.6922 19.5549 71.4263 19.3404C71.1635 19.129 70.7876 18.9513 70.3047 18.8073C69.8218 18.6632 69.2472 18.5008 68.584 18.32C67.768 18.078 67.0835 17.8206 66.5242 17.5478C65.9649 17.2751 65.5431 16.935 65.2558 16.5274C64.9686 16.1199 64.8249 15.6051 64.8249 14.983C64.8249 14.2262 65.0205 13.5857 65.4148 13.0648C65.806 12.5439 66.3469 12.1455 67.0346 11.8728C67.7222 11.6001 68.5015 11.4652 69.3787 11.4652C70.2527 11.4652 71.0473 11.6031 71.7564 11.8758C72.4654 12.1516 73.0766 12.5561 73.5901 13.0893L72.6855 14.4836C72.2179 13.9963 71.7044 13.6347 71.1451 13.3957C70.5858 13.1598 69.9593 13.0403 69.2656 13.0403C68.8591 13.0403 68.4587 13.0893 68.0675 13.1874C67.6733 13.2854 67.3493 13.4601 67.0926 13.7083C66.8359 13.9565 66.7075 14.3089 66.7075 14.7624C66.7075 15.1393 66.8084 15.4396 67.0132 15.6572C67.2179 15.8778 67.5174 16.0617 67.9178 16.2118C68.3182 16.362 68.8041 16.5305 69.3787 16.7113C70.268 16.9687 71.0412 17.2261 71.6983 17.4835C72.3554 17.7409 72.8627 18.0718 73.2264 18.4824C73.587 18.89 73.7704 19.4569 73.7704 20.1831C73.7704 21.3016 73.3486 22.1749 72.5021 22.8031C71.6586 23.4374 70.54 23.7499 69.1525 23.7499Z"
          fill="#322D38"
        />
        <path
          d="M82.2572 22.9962C82.0922 23.0728 81.866 23.1708 81.5787 23.2934C81.2915 23.416 80.9583 23.5232 80.5824 23.6121C80.2035 23.704 79.8061 23.75 79.3813 23.75C78.8985 23.75 78.4523 23.6611 78.0458 23.4865C77.6393 23.3118 77.3123 23.036 77.0709 22.6622C76.8294 22.2883 76.7072 21.8195 76.7072 21.2557V13.2272H75.0996V11.6491H76.7072V7.66862H78.6998V11.6491H81.3495V13.2272H78.6998V20.6397C78.7304 21.0657 78.874 21.3844 79.1307 21.5897C79.3875 21.795 79.69 21.8992 80.0354 21.8992C80.4266 21.8992 80.7902 21.8317 81.1203 21.6939C81.4534 21.556 81.6704 21.4579 81.7774 21.3966L82.2572 22.9962Z"
          fill="#322D38"
        />
        <path
          d="M84.1157 9.33868V6.82291H86.1084V9.33868H84.1157ZM84.1157 23.5233V11.5817H86.1084V23.5233H84.1157Z"
          fill="#322D38"
        />
        <path
          d="M94.5494 23.7499C93.66 23.7499 92.8471 23.5875 92.1167 23.2627C91.3862 22.9379 90.7505 22.4875 90.2157 21.9114C89.6809 21.3353 89.2652 20.6765 88.9718 19.9349C88.6784 19.1934 88.5317 18.4058 88.5317 17.5724C88.5317 16.4508 88.7823 15.4304 89.2774 14.5081C89.7756 13.5857 90.4785 12.8472 91.3832 12.2957C92.2878 11.7441 93.3361 11.4652 94.528 11.4652C95.6893 11.4652 96.704 11.7288 97.572 12.2558C98.4399 12.7829 99.0848 13.4877 99.5065 14.3732L97.5597 14.9922C97.2572 14.4284 96.8354 13.9902 96.2914 13.6776C95.7474 13.3651 95.1453 13.2088 94.4791 13.2088C93.7548 13.2088 93.0946 13.3988 92.4987 13.7757C91.9027 14.1526 91.4321 14.6705 91.0837 15.3262C90.7353 15.982 90.5641 16.7327 90.5641 17.5785C90.5641 18.4089 90.7414 19.1597 91.0959 19.8307C91.4504 20.5018 91.9241 21.035 92.5231 21.4272C93.1191 21.8195 93.7792 22.0156 94.5035 22.0156C94.9711 22.0156 95.4204 21.9328 95.8513 21.7643C96.2822 21.5958 96.6581 21.3721 96.9821 21.0902C97.3061 20.8082 97.5292 20.4987 97.6484 20.1647L99.5951 20.7592C99.3537 21.3384 98.987 21.8532 98.498 22.3036C98.0059 22.7541 97.4253 23.1095 96.7559 23.3669C96.0866 23.6213 95.3501 23.7499 94.5494 23.7499Z"
          fill="#322D38"
        />
        <defs>
          <linearGradient
            id="paint0_linear_117_1460"
            x1="100.844"
            y1="5.85835"
            x2="115.758"
            y2="5.85835"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DE8667" />
            <stop offset="1" stop-color="#EFB467" />
          </linearGradient>
        </defs>
      </svg>

      <ul id={showMobile ? "active" : ""}>
        <li>
          <a className="navLoginBtn">Login</a>
        </li>
      </ul>

      <svg
        onClick={showMobileMenu}
        className="showMobileMenu"
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5278 5.36127H2.63889C2.46945 5.36127 2.30694 5.29396 2.18713 5.17415C2.06731 5.05433 2 4.89183 2 4.72239C2 4.55294 2.06731 4.39044 2.18713 4.27062C2.30694 4.15081 2.46945 4.0835 2.63889 4.0835H20.5278C20.6972 4.0835 20.8597 4.15081 20.9795 4.27062C21.0994 4.39044 21.1667 4.55294 21.1667 4.72239C21.1667 4.89183 21.0994 5.05433 20.9795 5.17415C20.8597 5.29396 20.6972 5.36127 20.5278 5.36127Z"
          fill="url(#paint0_linear_117_1760)"
        />
        <path
          d="M20.5278 11.6391H2.63889C2.46945 11.6391 2.30694 11.5718 2.18713 11.452C2.06731 11.3322 2 11.1697 2 11.0002C2 10.8308 2.06731 10.6683 2.18713 10.5485C2.30694 10.4286 2.46945 10.3613 2.63889 10.3613H20.5278C20.6972 10.3613 20.8597 10.4286 20.9795 10.5485C21.0994 10.6683 21.1667 10.8308 21.1667 11.0002C21.1667 11.1697 21.0994 11.3322 20.9795 11.452C20.8597 11.5718 20.6972 11.6391 20.5278 11.6391Z"
          fill="url(#paint1_linear_117_1760)"
        />
        <path
          d="M20.5278 17.9169H2.63889C2.46945 17.9169 2.30694 17.8496 2.18713 17.7298C2.06731 17.61 2 17.4475 2 17.278C2 17.1086 2.06731 16.9461 2.18713 16.8263C2.30694 16.7065 2.46945 16.6392 2.63889 16.6392H20.5278C20.6972 16.6392 20.8597 16.7065 20.9795 16.8263C21.0994 16.9461 21.1667 17.1086 21.1667 17.278C21.1667 17.4475 21.0994 17.61 20.9795 17.7298C20.8597 17.8496 20.6972 17.9169 20.5278 17.9169Z"
          fill="url(#paint2_linear_117_1760)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_117_1760"
            x1="21.1667"
            y1="4.0835"
            x2="19.2535"
            y2="10.5031"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFB467" />
            <stop offset="1" stop-color="#DE8667" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_117_1760"
            x1="21.1667"
            y1="10.3613"
            x2="19.2535"
            y2="16.7809"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFB467" />
            <stop offset="1" stop-color="#DE8667" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_117_1760"
            x1="21.1667"
            y1="16.6392"
            x2="19.2535"
            y2="23.0587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFB467" />
            <stop offset="1" stop-color="#DE8667" />
          </linearGradient>
        </defs>
      </svg>
    </nav>
  );
};

export default Nav;
