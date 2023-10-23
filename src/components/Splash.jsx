import React from 'react'
import '../style/splash.css'
export const Splash = () => {
  return (
    <div className="splash-bg" id="splash-bg">
        <div className="splash">
            <svg id="logo" height="151" viewBox="0 0 845 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.519989" y="0.432007" width="844"
                    height="150" fill="black">
                    <rect fill="white" x="0.519989" y="0.432007" width="844" height="150" />
                    <path
                        d="M66.864 72.392C66.192 72.488 64.944 72.536 63.12 72.536C61.296 72.536 59.952 72.2 59.088 71.528C58.416 70.856 58.08 69.224 58.08 66.632C58.08 64.04 58.32 62.072 58.8 60.728C59.28 59.288 60.768 58.568 63.264 58.568C65.856 58.568 68.304 59.192 70.608 60.44C73.392 58.328 75.984 55.064 78.384 50.648C80.784 46.232 81.984 41.672 81.984 36.968C81.984 30.152 79.92 25.16 75.792 21.992C71.76 18.824 65.472 17.24 56.928 17.24C44.64 17.24 34.56 19.64 26.688 24.44C18.912 29.24 15.024 34.328 15.024 39.704C15.024 42.296 16.08 44.456 18.192 46.184C20.304 47.816 22.416 48.92 24.528 49.496C24.144 53.336 22.944 56.888 20.928 60.152C17.184 59.576 13.68 57.656 10.416 54.392C7.15199 51.032 5.51999 46.52 5.51999 40.856C5.51999 31.448 10.944 23.72 21.792 17.672C32.64 11.624 46.08 8.60001 62.112 8.60001C74.976 8.60001 85.152 11 92.64 15.8C100.128 20.6 103.872 27.656 103.872 36.968C103.872 43.496 101.424 49.4 96.528 54.68C91.632 59.864 85.728 64.136 78.816 67.496C80.448 69.128 81.888 71.432 83.136 74.408C84.48 77.384 85.536 79.832 86.304 81.752C87.168 83.576 87.84 85.064 88.32 86.216C88.8 87.368 89.472 89 90.336 91.112C94.08 101.288 97.44 108.776 100.416 113.576C103.488 118.472 106.416 120.92 109.2 120.92C109.776 120.92 110.208 120.872 110.496 120.776L111.936 125.96C107.232 129.704 101.856 131.576 95.808 131.576C89.76 131.576 85.488 129.992 82.992 126.824C80.496 123.752 78.192 117.368 76.08 107.672C75.792 106.712 74.976 103.208 73.632 97.16C70.944 84.296 68.688 76.04 66.864 72.392ZM39.072 37.832C39.072 35.624 37.92 33.224 35.616 30.632L35.76 29.624C40.848 26.648 47.184 25.16 54.768 25.16C57.744 25.16 59.952 25.4 61.392 25.88C61.872 26.936 62.112 28.424 62.112 30.344C62.112 34.568 59.616 46.664 54.624 66.632C49.728 86.6 46.848 101.528 45.984 111.416C40.32 113.048 34.032 113.864 27.12 113.864C25.488 113.864 24.288 113.72 23.52 113.432C24 107.288 26.688 94.76 31.584 75.848C36.576 56.84 39.072 44.168 39.072 37.832Z" />
                    <path
                        d="M164.16 29.048C164.16 35.48 161.808 46.472 157.104 62.024C152.4 77.48 150.048 87.368 150.048 91.688C150.048 95.912 152.016 98.024 155.952 98.024C159.984 98.024 165.456 95.096 172.368 89.24C172.656 84.344 173.472 78.488 174.816 71.672C178.848 50.264 183.744 34.76 189.504 25.16C195.264 15.56 201.984 10.76 209.664 10.76C214.176 10.76 217.536 12.104 219.744 14.792C222.048 17.384 223.2 20.84 223.2 25.16C223.2 38.792 213.888 57.128 195.264 80.168C194.976 83.912 194.832 87.704 194.832 91.544C194.832 99.512 196.176 103.496 198.864 103.496C200.496 103.496 201.888 103.304 203.04 102.92L205.2 108.392C199.248 112.616 193.296 114.728 187.344 114.728C178.704 114.728 173.76 109.688 172.512 99.608C160.992 109.688 151.152 114.728 142.992 114.728C138.096 114.728 134.112 113.24 131.04 110.264C128.064 107.192 126.576 102.776 126.576 97.016C126.576 93.656 127.68 88.232 129.888 80.744C132.192 73.16 133.536 68.696 133.92 67.352C118.272 60.92 110.448 51.992 110.448 40.568C110.448 32.696 114.096 25.784 121.392 19.832C128.688 13.784 136.8 10.76 145.728 10.76C158.016 10.76 164.16 16.856 164.16 29.048ZM136.656 56.984C140.016 45.272 141.696 36.536 141.696 30.776C141.696 25.016 139.632 22.136 135.504 22.136C131.472 22.136 127.776 23.96 124.416 27.608C121.056 31.256 119.376 35.288 119.376 39.704C119.376 44.024 121.056 47.672 124.416 50.648C127.776 53.528 131.856 55.64 136.656 56.984ZM214.56 24.872C214.56 22.28 213.6 20.984 211.68 20.984C207.456 20.984 202.608 35.576 197.136 64.76C201.456 59.096 205.44 52.328 209.088 44.456C212.736 36.488 214.56 29.96 214.56 24.872Z" />
                    <path
                        d="M254.505 114.728C245.001 114.728 237.321 111.176 231.465 104.072C225.609 96.872 222.681 87.368 222.681 75.56C222.681 63.752 224.697 53.048 228.729 43.448C232.857 33.752 238.713 25.88 246.297 19.832C253.881 13.784 262.281 10.76 271.497 10.76C274.953 10.76 278.025 11.288 280.713 12.344C287.625 7.736 294.777 5.43201 302.169 5.43201C305.625 5.43201 308.841 5.96 311.817 7.016C314.889 7.97601 317.145 9.17601 318.585 10.616C317.817 13.88 316.569 16.856 314.841 19.544C310.329 16.184 305.769 14.504 301.161 14.504C296.553 14.504 292.329 15.416 288.489 17.24C293.001 22.04 295.257 28.856 295.257 37.688C295.257 46.424 292.953 54.392 288.345 61.592C283.737 68.792 277.977 72.392 271.065 72.392C266.937 72.392 263.577 70.664 260.985 67.208C258.489 63.752 257.241 59.432 257.241 54.248C257.241 41.768 261.897 30.488 271.209 20.408C263.625 20.696 257.481 25.688 252.777 35.384C248.073 44.984 245.721 56.6 245.721 70.232C245.721 90.104 251.481 100.04 263.001 100.04C270.873 100.04 279.273 95.144 288.201 85.352L293.241 89.528C291.993 91.736 289.929 94.472 287.049 97.736C284.265 101 281.481 103.736 278.697 105.944C275.913 108.152 272.313 110.168 267.897 111.992C263.481 113.816 259.017 114.728 254.505 114.728ZM285.321 39.128C285.321 31.256 283.545 25.88 279.993 23C275.769 26.744 272.361 31.304 269.769 36.68C267.273 42.056 266.025 47.624 266.025 53.384C266.025 56.36 266.553 58.808 267.609 60.728C268.761 62.648 270.201 63.608 271.929 63.608C275.673 63.608 278.841 60.968 281.433 55.688C284.025 50.408 285.321 44.888 285.321 39.128Z" />
                    <path
                        d="M378.334 114.728C373.342 114.728 369.694 113.432 367.39 110.84C365.086 108.152 363.934 104.648 363.934 100.328C363.934 95.912 366.094 84.104 370.414 64.904C362.254 65.096 355.726 65.864 350.83 67.208C348.046 80.744 343.774 92.456 338.014 102.344C335.038 107.336 331.438 111.272 327.214 114.152C322.99 117.128 318.382 118.616 313.39 118.616C308.398 118.616 304.318 116.936 301.15 113.576C297.982 110.312 296.398 105.992 296.398 100.616C296.398 92.936 299.566 85.736 305.902 79.016C312.238 72.2 320.254 66.728 329.95 62.6C330.814 53.768 331.246 46.568 331.246 41C331.246 35.336 330.67 31.352 329.518 29.048C328.462 26.744 326.734 25.592 324.334 25.592C321.934 25.592 318.766 26.504 314.83 28.328C310.894 30.056 307.198 32.408 303.742 35.384L300.142 30.2C303.598 25.976 308.686 21.992 315.406 18.248C322.126 14.408 328.606 12.488 334.846 12.488C347.422 12.488 353.71 22.04 353.71 41.144C353.71 45.656 353.326 51.08 352.558 57.416C358.798 56.168 365.47 55.352 372.574 54.968C375.838 39.8 377.47 27.8 377.47 18.968C377.47 17.336 377.374 16.088 377.182 15.224C384.862 12.248 392.59 10.76 400.366 10.76C400.654 11.528 400.798 12.872 400.798 14.792C400.798 20.744 398.446 34.328 393.742 55.544C405.262 56.408 413.134 57.56 417.358 59C417.454 59.384 417.502 60.104 417.502 61.16C417.502 63.176 416.59 65.72 414.766 68.792C408.526 66.872 400.846 65.624 391.726 65.048C388.366 81.176 386.686 91.64 386.686 96.44C386.686 101.144 387.838 103.496 390.142 103.496C391.39 103.496 392.734 103.256 394.174 102.776L396.334 108.392C389.422 112.616 383.422 114.728 378.334 114.728ZM311.95 104.792C315.022 104.792 318.046 102.152 321.022 96.872C323.998 91.592 326.398 83.72 328.222 73.256C322.846 75.56 317.95 79.16 313.534 84.056C309.118 88.952 306.91 93.656 306.91 98.168C306.91 100.28 307.39 101.912 308.35 103.064C309.406 104.216 310.606 104.792 311.95 104.792Z" />
                    <path
                        d="M442.671 12.488C455.727 12.488 462.255 21.944 462.255 40.856C462.255 53.624 460.143 66.728 455.919 80.168C453.711 87.176 451.071 93.56 447.999 99.32C445.023 104.984 441.231 109.592 436.623 113.144C432.111 116.792 427.167 118.616 421.791 118.616C416.511 118.616 412.287 116.888 409.119 113.432C405.951 110.072 404.367 105.704 404.367 100.328C404.367 92.648 407.487 85.544 413.727 79.016C420.063 72.488 428.079 67.016 437.775 62.6C439.119 55.208 439.791 48.296 439.791 41.864C439.791 35.336 439.167 30.872 437.919 28.472C436.671 26.072 434.847 24.872 432.447 24.872C430.143 24.872 427.359 25.496 424.095 26.744C420.831 27.992 417.711 29.672 414.735 31.784L410.847 26.024C414.879 22.472 419.823 19.352 425.679 16.664C431.631 13.88 437.295 12.488 442.671 12.488ZM436.335 73.832C430.479 76.328 425.487 79.832 421.359 84.344C417.231 88.76 415.167 93.272 415.167 97.88C415.167 102.392 416.943 104.648 420.495 104.648C423.567 104.552 426.495 102.056 429.279 97.16C432.159 92.168 434.511 84.392 436.335 73.832Z" />
                    <path
                        d="M573.255 72.392C572.583 72.488 571.335 72.536 569.511 72.536C567.687 72.536 566.343 72.2 565.479 71.528C564.807 70.856 564.471 69.224 564.471 66.632C564.471 64.04 564.711 62.072 565.191 60.728C565.671 59.288 567.159 58.568 569.655 58.568C572.247 58.568 574.695 59.192 576.999 60.44C579.783 58.328 582.375 55.064 584.775 50.648C587.175 46.232 588.375 41.672 588.375 36.968C588.375 30.152 586.311 25.16 582.183 21.992C578.151 18.824 571.863 17.24 563.319 17.24C551.031 17.24 540.951 19.64 533.079 24.44C525.303 29.24 521.415 34.328 521.415 39.704C521.415 42.296 522.471 44.456 524.583 46.184C526.695 47.816 528.807 48.92 530.919 49.496C530.535 53.336 529.335 56.888 527.319 60.152C523.575 59.576 520.071 57.656 516.807 54.392C513.543 51.032 511.911 46.52 511.911 40.856C511.911 31.448 517.335 23.72 528.183 17.672C539.031 11.624 552.471 8.60001 568.503 8.60001C581.367 8.60001 591.543 11 599.031 15.8C606.519 20.6 610.263 27.656 610.263 36.968C610.263 43.496 607.815 49.4 602.919 54.68C598.023 59.864 592.119 64.136 585.207 67.496C586.839 69.128 588.279 71.432 589.527 74.408C590.871 77.384 591.927 79.832 592.695 81.752C593.559 83.576 594.231 85.064 594.711 86.216C595.191 87.368 595.863 89 596.727 91.112C600.471 101.288 603.831 108.776 606.807 113.576C609.879 118.472 612.807 120.92 615.591 120.92C616.167 120.92 616.599 120.872 616.887 120.776L618.327 125.96C613.623 129.704 608.247 131.576 602.199 131.576C596.151 131.576 591.879 129.992 589.383 126.824C586.887 123.752 584.583 117.368 582.471 107.672C582.183 106.712 581.367 103.208 580.023 97.16C577.335 84.296 575.079 76.04 573.255 72.392ZM545.463 37.832C545.463 35.624 544.311 33.224 542.007 30.632L542.151 29.624C547.239 26.648 553.575 25.16 561.159 25.16C564.135 25.16 566.343 25.4 567.783 25.88C568.263 26.936 568.503 28.424 568.503 30.344C568.503 34.568 566.007 46.664 561.015 66.632C556.119 86.6 553.239 101.528 552.375 111.416C546.711 113.048 540.423 113.864 533.511 113.864C531.879 113.864 530.679 113.72 529.911 113.432C530.391 107.288 533.079 94.76 537.975 75.848C542.967 56.84 545.463 44.168 545.463 37.832Z" />
                    <path
                        d="M627.606 119.912C621.846 119.912 617.046 117.992 613.206 114.152C609.462 110.408 607.59 106.04 607.59 101.048C607.59 95.96 608.79 91.256 611.19 86.936C613.59 82.52 616.998 78.44 621.414 74.696C625.926 70.952 631.782 67.88 638.982 65.48C646.182 62.984 654.15 61.592 662.886 61.304C667.974 48.728 672.486 34.664 676.422 19.112C676.518 18.536 676.566 17.816 676.566 16.952C676.566 15.992 676.086 15.176 675.126 14.504V13.064C683.382 11.528 690.918 10.76 697.734 10.76L706.374 11.336C708.87 15.752 710.262 21.896 710.55 29.768C710.838 37.544 711.03 51.08 711.126 70.376C721.494 74.888 730.374 80.6 737.766 87.512C737.382 88.76 736.614 90.008 735.462 91.256C734.406 92.408 733.398 93.272 732.438 93.848L730.998 94.712C725.334 89.144 718.758 84.392 711.27 80.456C711.462 85.928 711.99 90.536 712.854 94.28C714.198 100.424 715.782 103.496 717.606 103.496C718.662 103.496 719.91 103.256 721.35 102.776L723.51 108.392C716.886 112.616 710.55 114.728 704.502 114.728C694.518 114.728 689.526 107.192 689.526 92.12V73.256C682.806 71.624 676.71 70.616 671.238 70.232C658.758 103.352 644.214 119.912 627.606 119.912ZM659.286 70.088C648.438 70.952 639.414 74.744 632.214 81.464C625.014 88.184 621.414 94.472 621.414 100.328C621.414 106.184 623.67 109.112 628.182 109.112C637.398 109.112 647.766 96.104 659.286 70.088ZM687.942 22.28C687.75 22.184 687.366 22.136 686.79 22.136C686.214 22.136 685.83 22.184 685.638 22.28C684.774 29.576 681.03 42.68 674.406 61.592C679.11 61.88 684.15 62.552 689.526 63.608C689.526 39.992 688.998 26.216 687.942 22.28Z" />
                    <path
                        d="M825.919 109.688C824.767 114.68 823.711 117.8 822.751 119.048C816.607 117.128 809.743 116.168 802.159 116.168H802.015C792.511 135.56 779.695 145.256 763.567 145.256C759.055 145.256 755.263 143.912 752.191 141.224C749.119 138.632 747.583 135.464 747.583 131.72C747.583 128.072 748.783 124.76 751.183 121.784C753.583 118.808 756.751 116.36 760.687 114.44C767.791 111.08 775.231 108.728 783.007 107.384L785.887 96.728C776.863 102.392 768.847 105.224 761.839 105.224C757.423 105.224 753.871 103.928 751.183 101.336C748.591 98.648 747.295 94.472 747.295 88.808C747.295 84.296 747.871 79.784 749.023 75.272C750.175 70.76 750.799 68.264 750.895 67.784C744.271 65.768 738.415 62.312 733.327 57.416C728.335 52.424 725.839 46.136 725.839 38.552C725.839 30.968 729.247 24.44 736.063 18.968C742.879 13.496 750.319 10.76 758.383 10.76C766.447 10.76 772.399 12.824 776.239 16.952C780.079 20.984 781.999 25.928 781.999 31.784C781.999 37.64 779.935 46.712 775.807 59C771.775 71.192 769.759 78.872 769.759 82.04C769.759 86.36 771.68 88.52 775.52 88.52C779.359 88.52 784.015 86.504 789.487 82.472L792.511 67.352C796.063 49.592 798.655 38.6 800.287 34.376C801.919 30.152 803.503 26.552 805.039 23.576C806.671 20.504 808.351 18.152 810.079 16.52C814.111 12.68 818.671 10.76 823.759 10.76C828.847 10.76 832.735 12.056 835.423 14.648C838.111 17.24 839.455 21.272 839.455 26.744C839.455 32.12 837.247 39.128 832.831 47.768C828.511 56.408 822.511 65.048 814.831 73.688C812.527 86.648 809.503 97.928 805.759 107.528H807.055C814.639 107.72 820.255 108.296 823.903 109.256L825.919 109.688ZM752.623 56.984C756.271 45.752 758.095 36.92 758.095 30.488C758.095 24.056 755.647 20.84 750.751 20.84C746.815 20.84 743.167 22.568 739.807 26.024C736.447 29.384 734.767 33.512 734.767 38.408C734.767 43.304 736.591 47.288 740.239 50.36C743.887 53.432 748.015 55.64 752.623 56.984ZM817.279 58.424C821.119 54.008 824.335 48.536 826.927 42.008C829.519 35.384 830.815 30.248 830.815 26.6C830.815 22.952 830.143 21.128 828.799 21.128C827.647 21.128 826.351 22.472 824.911 25.16C822.415 29.96 819.775 41.096 816.991 58.568L817.279 58.424ZM758.239 130.136C758.239 132.44 759.871 133.592 763.135 133.592C766.399 133.592 769.663 132.104 772.927 129.128C776.287 126.248 778.975 122.36 780.991 117.464C775.519 117.944 770.335 119.48 765.439 122.072C760.639 124.664 758.239 127.352 758.239 130.136Z" />
                </mask>
                <path
                    d="M66.864 72.392C66.192 72.488 64.944 72.536 63.12 72.536C61.296 72.536 59.952 72.2 59.088 71.528C58.416 70.856 58.08 69.224 58.08 66.632C58.08 64.04 58.32 62.072 58.8 60.728C59.28 59.288 60.768 58.568 63.264 58.568C65.856 58.568 68.304 59.192 70.608 60.44C73.392 58.328 75.984 55.064 78.384 50.648C80.784 46.232 81.984 41.672 81.984 36.968C81.984 30.152 79.92 25.16 75.792 21.992C71.76 18.824 65.472 17.24 56.928 17.24C44.64 17.24 34.56 19.64 26.688 24.44C18.912 29.24 15.024 34.328 15.024 39.704C15.024 42.296 16.08 44.456 18.192 46.184C20.304 47.816 22.416 48.92 24.528 49.496C24.144 53.336 22.944 56.888 20.928 60.152C17.184 59.576 13.68 57.656 10.416 54.392C7.15199 51.032 5.51999 46.52 5.51999 40.856C5.51999 31.448 10.944 23.72 21.792 17.672C32.64 11.624 46.08 8.60001 62.112 8.60001C74.976 8.60001 85.152 11 92.64 15.8C100.128 20.6 103.872 27.656 103.872 36.968C103.872 43.496 101.424 49.4 96.528 54.68C91.632 59.864 85.728 64.136 78.816 67.496C80.448 69.128 81.888 71.432 83.136 74.408C84.48 77.384 85.536 79.832 86.304 81.752C87.168 83.576 87.84 85.064 88.32 86.216C88.8 87.368 89.472 89 90.336 91.112C94.08 101.288 97.44 108.776 100.416 113.576C103.488 118.472 106.416 120.92 109.2 120.92C109.776 120.92 110.208 120.872 110.496 120.776L111.936 125.96C107.232 129.704 101.856 131.576 95.808 131.576C89.76 131.576 85.488 129.992 82.992 126.824C80.496 123.752 78.192 117.368 76.08 107.672C75.792 106.712 74.976 103.208 73.632 97.16C70.944 84.296 68.688 76.04 66.864 72.392ZM39.072 37.832C39.072 35.624 37.92 33.224 35.616 30.632L35.76 29.624C40.848 26.648 47.184 25.16 54.768 25.16C57.744 25.16 59.952 25.4 61.392 25.88C61.872 26.936 62.112 28.424 62.112 30.344C62.112 34.568 59.616 46.664 54.624 66.632C49.728 86.6 46.848 101.528 45.984 111.416C40.32 113.048 34.032 113.864 27.12 113.864C25.488 113.864 24.288 113.72 23.52 113.432C24 107.288 26.688 94.76 31.584 75.848C36.576 56.84 39.072 44.168 39.072 37.832Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M164.16 29.048C164.16 35.48 161.808 46.472 157.104 62.024C152.4 77.48 150.048 87.368 150.048 91.688C150.048 95.912 152.016 98.024 155.952 98.024C159.984 98.024 165.456 95.096 172.368 89.24C172.656 84.344 173.472 78.488 174.816 71.672C178.848 50.264 183.744 34.76 189.504 25.16C195.264 15.56 201.984 10.76 209.664 10.76C214.176 10.76 217.536 12.104 219.744 14.792C222.048 17.384 223.2 20.84 223.2 25.16C223.2 38.792 213.888 57.128 195.264 80.168C194.976 83.912 194.832 87.704 194.832 91.544C194.832 99.512 196.176 103.496 198.864 103.496C200.496 103.496 201.888 103.304 203.04 102.92L205.2 108.392C199.248 112.616 193.296 114.728 187.344 114.728C178.704 114.728 173.76 109.688 172.512 99.608C160.992 109.688 151.152 114.728 142.992 114.728C138.096 114.728 134.112 113.24 131.04 110.264C128.064 107.192 126.576 102.776 126.576 97.016C126.576 93.656 127.68 88.232 129.888 80.744C132.192 73.16 133.536 68.696 133.92 67.352C118.272 60.92 110.448 51.992 110.448 40.568C110.448 32.696 114.096 25.784 121.392 19.832C128.688 13.784 136.8 10.76 145.728 10.76C158.016 10.76 164.16 16.856 164.16 29.048ZM136.656 56.984C140.016 45.272 141.696 36.536 141.696 30.776C141.696 25.016 139.632 22.136 135.504 22.136C131.472 22.136 127.776 23.96 124.416 27.608C121.056 31.256 119.376 35.288 119.376 39.704C119.376 44.024 121.056 47.672 124.416 50.648C127.776 53.528 131.856 55.64 136.656 56.984ZM214.56 24.872C214.56 22.28 213.6 20.984 211.68 20.984C207.456 20.984 202.608 35.576 197.136 64.76C201.456 59.096 205.44 52.328 209.088 44.456C212.736 36.488 214.56 29.96 214.56 24.872Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M254.505 114.728C245.001 114.728 237.321 111.176 231.465 104.072C225.609 96.872 222.681 87.368 222.681 75.56C222.681 63.752 224.697 53.048 228.729 43.448C232.857 33.752 238.713 25.88 246.297 19.832C253.881 13.784 262.281 10.76 271.497 10.76C274.953 10.76 278.025 11.288 280.713 12.344C287.625 7.736 294.777 5.43201 302.169 5.43201C305.625 5.43201 308.841 5.96 311.817 7.016C314.889 7.97601 317.145 9.17601 318.585 10.616C317.817 13.88 316.569 16.856 314.841 19.544C310.329 16.184 305.769 14.504 301.161 14.504C296.553 14.504 292.329 15.416 288.489 17.24C293.001 22.04 295.257 28.856 295.257 37.688C295.257 46.424 292.953 54.392 288.345 61.592C283.737 68.792 277.977 72.392 271.065 72.392C266.937 72.392 263.577 70.664 260.985 67.208C258.489 63.752 257.241 59.432 257.241 54.248C257.241 41.768 261.897 30.488 271.209 20.408C263.625 20.696 257.481 25.688 252.777 35.384C248.073 44.984 245.721 56.6 245.721 70.232C245.721 90.104 251.481 100.04 263.001 100.04C270.873 100.04 279.273 95.144 288.201 85.352L293.241 89.528C291.993 91.736 289.929 94.472 287.049 97.736C284.265 101 281.481 103.736 278.697 105.944C275.913 108.152 272.313 110.168 267.897 111.992C263.481 113.816 259.017 114.728 254.505 114.728ZM285.321 39.128C285.321 31.256 283.545 25.88 279.993 23C275.769 26.744 272.361 31.304 269.769 36.68C267.273 42.056 266.025 47.624 266.025 53.384C266.025 56.36 266.553 58.808 267.609 60.728C268.761 62.648 270.201 63.608 271.929 63.608C275.673 63.608 278.841 60.968 281.433 55.688C284.025 50.408 285.321 44.888 285.321 39.128Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M378.334 114.728C373.342 114.728 369.694 113.432 367.39 110.84C365.086 108.152 363.934 104.648 363.934 100.328C363.934 95.912 366.094 84.104 370.414 64.904C362.254 65.096 355.726 65.864 350.83 67.208C348.046 80.744 343.774 92.456 338.014 102.344C335.038 107.336 331.438 111.272 327.214 114.152C322.99 117.128 318.382 118.616 313.39 118.616C308.398 118.616 304.318 116.936 301.15 113.576C297.982 110.312 296.398 105.992 296.398 100.616C296.398 92.936 299.566 85.736 305.902 79.016C312.238 72.2 320.254 66.728 329.95 62.6C330.814 53.768 331.246 46.568 331.246 41C331.246 35.336 330.67 31.352 329.518 29.048C328.462 26.744 326.734 25.592 324.334 25.592C321.934 25.592 318.766 26.504 314.83 28.328C310.894 30.056 307.198 32.408 303.742 35.384L300.142 30.2C303.598 25.976 308.686 21.992 315.406 18.248C322.126 14.408 328.606 12.488 334.846 12.488C347.422 12.488 353.71 22.04 353.71 41.144C353.71 45.656 353.326 51.08 352.558 57.416C358.798 56.168 365.47 55.352 372.574 54.968C375.838 39.8 377.47 27.8 377.47 18.968C377.47 17.336 377.374 16.088 377.182 15.224C384.862 12.248 392.59 10.76 400.366 10.76C400.654 11.528 400.798 12.872 400.798 14.792C400.798 20.744 398.446 34.328 393.742 55.544C405.262 56.408 413.134 57.56 417.358 59C417.454 59.384 417.502 60.104 417.502 61.16C417.502 63.176 416.59 65.72 414.766 68.792C408.526 66.872 400.846 65.624 391.726 65.048C388.366 81.176 386.686 91.64 386.686 96.44C386.686 101.144 387.838 103.496 390.142 103.496C391.39 103.496 392.734 103.256 394.174 102.776L396.334 108.392C389.422 112.616 383.422 114.728 378.334 114.728ZM311.95 104.792C315.022 104.792 318.046 102.152 321.022 96.872C323.998 91.592 326.398 83.72 328.222 73.256C322.846 75.56 317.95 79.16 313.534 84.056C309.118 88.952 306.91 93.656 306.91 98.168C306.91 100.28 307.39 101.912 308.35 103.064C309.406 104.216 310.606 104.792 311.95 104.792Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M442.671 12.488C455.727 12.488 462.255 21.944 462.255 40.856C462.255 53.624 460.143 66.728 455.919 80.168C453.711 87.176 451.071 93.56 447.999 99.32C445.023 104.984 441.231 109.592 436.623 113.144C432.111 116.792 427.167 118.616 421.791 118.616C416.511 118.616 412.287 116.888 409.119 113.432C405.951 110.072 404.367 105.704 404.367 100.328C404.367 92.648 407.487 85.544 413.727 79.016C420.063 72.488 428.079 67.016 437.775 62.6C439.119 55.208 439.791 48.296 439.791 41.864C439.791 35.336 439.167 30.872 437.919 28.472C436.671 26.072 434.847 24.872 432.447 24.872C430.143 24.872 427.359 25.496 424.095 26.744C420.831 27.992 417.711 29.672 414.735 31.784L410.847 26.024C414.879 22.472 419.823 19.352 425.679 16.664C431.631 13.88 437.295 12.488 442.671 12.488ZM436.335 73.832C430.479 76.328 425.487 79.832 421.359 84.344C417.231 88.76 415.167 93.272 415.167 97.88C415.167 102.392 416.943 104.648 420.495 104.648C423.567 104.552 426.495 102.056 429.279 97.16C432.159 92.168 434.511 84.392 436.335 73.832Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M573.255 72.392C572.583 72.488 571.335 72.536 569.511 72.536C567.687 72.536 566.343 72.2 565.479 71.528C564.807 70.856 564.471 69.224 564.471 66.632C564.471 64.04 564.711 62.072 565.191 60.728C565.671 59.288 567.159 58.568 569.655 58.568C572.247 58.568 574.695 59.192 576.999 60.44C579.783 58.328 582.375 55.064 584.775 50.648C587.175 46.232 588.375 41.672 588.375 36.968C588.375 30.152 586.311 25.16 582.183 21.992C578.151 18.824 571.863 17.24 563.319 17.24C551.031 17.24 540.951 19.64 533.079 24.44C525.303 29.24 521.415 34.328 521.415 39.704C521.415 42.296 522.471 44.456 524.583 46.184C526.695 47.816 528.807 48.92 530.919 49.496C530.535 53.336 529.335 56.888 527.319 60.152C523.575 59.576 520.071 57.656 516.807 54.392C513.543 51.032 511.911 46.52 511.911 40.856C511.911 31.448 517.335 23.72 528.183 17.672C539.031 11.624 552.471 8.60001 568.503 8.60001C581.367 8.60001 591.543 11 599.031 15.8C606.519 20.6 610.263 27.656 610.263 36.968C610.263 43.496 607.815 49.4 602.919 54.68C598.023 59.864 592.119 64.136 585.207 67.496C586.839 69.128 588.279 71.432 589.527 74.408C590.871 77.384 591.927 79.832 592.695 81.752C593.559 83.576 594.231 85.064 594.711 86.216C595.191 87.368 595.863 89 596.727 91.112C600.471 101.288 603.831 108.776 606.807 113.576C609.879 118.472 612.807 120.92 615.591 120.92C616.167 120.92 616.599 120.872 616.887 120.776L618.327 125.96C613.623 129.704 608.247 131.576 602.199 131.576C596.151 131.576 591.879 129.992 589.383 126.824C586.887 123.752 584.583 117.368 582.471 107.672C582.183 106.712 581.367 103.208 580.023 97.16C577.335 84.296 575.079 76.04 573.255 72.392ZM545.463 37.832C545.463 35.624 544.311 33.224 542.007 30.632L542.151 29.624C547.239 26.648 553.575 25.16 561.159 25.16C564.135 25.16 566.343 25.4 567.783 25.88C568.263 26.936 568.503 28.424 568.503 30.344C568.503 34.568 566.007 46.664 561.015 66.632C556.119 86.6 553.239 101.528 552.375 111.416C546.711 113.048 540.423 113.864 533.511 113.864C531.879 113.864 530.679 113.72 529.911 113.432C530.391 107.288 533.079 94.76 537.975 75.848C542.967 56.84 545.463 44.168 545.463 37.832Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M627.606 119.912C621.846 119.912 617.046 117.992 613.206 114.152C609.462 110.408 607.59 106.04 607.59 101.048C607.59 95.96 608.79 91.256 611.19 86.936C613.59 82.52 616.998 78.44 621.414 74.696C625.926 70.952 631.782 67.88 638.982 65.48C646.182 62.984 654.15 61.592 662.886 61.304C667.974 48.728 672.486 34.664 676.422 19.112C676.518 18.536 676.566 17.816 676.566 16.952C676.566 15.992 676.086 15.176 675.126 14.504V13.064C683.382 11.528 690.918 10.76 697.734 10.76L706.374 11.336C708.87 15.752 710.262 21.896 710.55 29.768C710.838 37.544 711.03 51.08 711.126 70.376C721.494 74.888 730.374 80.6 737.766 87.512C737.382 88.76 736.614 90.008 735.462 91.256C734.406 92.408 733.398 93.272 732.438 93.848L730.998 94.712C725.334 89.144 718.758 84.392 711.27 80.456C711.462 85.928 711.99 90.536 712.854 94.28C714.198 100.424 715.782 103.496 717.606 103.496C718.662 103.496 719.91 103.256 721.35 102.776L723.51 108.392C716.886 112.616 710.55 114.728 704.502 114.728C694.518 114.728 689.526 107.192 689.526 92.12V73.256C682.806 71.624 676.71 70.616 671.238 70.232C658.758 103.352 644.214 119.912 627.606 119.912ZM659.286 70.088C648.438 70.952 639.414 74.744 632.214 81.464C625.014 88.184 621.414 94.472 621.414 100.328C621.414 106.184 623.67 109.112 628.182 109.112C637.398 109.112 647.766 96.104 659.286 70.088ZM687.942 22.28C687.75 22.184 687.366 22.136 686.79 22.136C686.214 22.136 685.83 22.184 685.638 22.28C684.774 29.576 681.03 42.68 674.406 61.592C679.11 61.88 684.15 62.552 689.526 63.608C689.526 39.992 688.998 26.216 687.942 22.28Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
                <path
                    d="M825.919 109.688C824.767 114.68 823.711 117.8 822.751 119.048C816.607 117.128 809.743 116.168 802.159 116.168H802.015C792.511 135.56 779.695 145.256 763.567 145.256C759.055 145.256 755.263 143.912 752.191 141.224C749.119 138.632 747.583 135.464 747.583 131.72C747.583 128.072 748.783 124.76 751.183 121.784C753.583 118.808 756.751 116.36 760.687 114.44C767.791 111.08 775.231 108.728 783.007 107.384L785.887 96.728C776.863 102.392 768.847 105.224 761.839 105.224C757.423 105.224 753.871 103.928 751.183 101.336C748.591 98.648 747.295 94.472 747.295 88.808C747.295 84.296 747.871 79.784 749.023 75.272C750.175 70.76 750.799 68.264 750.895 67.784C744.271 65.768 738.415 62.312 733.327 57.416C728.335 52.424 725.839 46.136 725.839 38.552C725.839 30.968 729.247 24.44 736.063 18.968C742.879 13.496 750.319 10.76 758.383 10.76C766.447 10.76 772.399 12.824 776.239 16.952C780.079 20.984 781.999 25.928 781.999 31.784C781.999 37.64 779.935 46.712 775.807 59C771.775 71.192 769.759 78.872 769.759 82.04C769.759 86.36 771.68 88.52 775.52 88.52C779.359 88.52 784.015 86.504 789.487 82.472L792.511 67.352C796.063 49.592 798.655 38.6 800.287 34.376C801.919 30.152 803.503 26.552 805.039 23.576C806.671 20.504 808.351 18.152 810.079 16.52C814.111 12.68 818.671 10.76 823.759 10.76C828.847 10.76 832.735 12.056 835.423 14.648C838.111 17.24 839.455 21.272 839.455 26.744C839.455 32.12 837.247 39.128 832.831 47.768C828.511 56.408 822.511 65.048 814.831 73.688C812.527 86.648 809.503 97.928 805.759 107.528H807.055C814.639 107.72 820.255 108.296 823.903 109.256L825.919 109.688ZM752.623 56.984C756.271 45.752 758.095 36.92 758.095 30.488C758.095 24.056 755.647 20.84 750.751 20.84C746.815 20.84 743.167 22.568 739.807 26.024C736.447 29.384 734.767 33.512 734.767 38.408C734.767 43.304 736.591 47.288 740.239 50.36C743.887 53.432 748.015 55.64 752.623 56.984ZM817.279 58.424C821.119 54.008 824.335 48.536 826.927 42.008C829.519 35.384 830.815 30.248 830.815 26.6C830.815 22.952 830.143 21.128 828.799 21.128C827.647 21.128 826.351 22.472 824.911 25.16C822.415 29.96 819.775 41.096 816.991 58.568L817.279 58.424ZM758.239 130.136C758.239 132.44 759.871 133.592 763.135 133.592C766.399 133.592 769.663 132.104 772.927 129.128C776.287 126.248 778.975 122.36 780.991 117.464C775.519 117.944 770.335 119.48 765.439 122.072C760.639 124.664 758.239 127.352 758.239 130.136Z"
                    stroke="#0EC5D2" strokeWidth="10" mask="url(#path-1-outside-1)" />
            </svg>
        </div>
    </div>
  )
}
