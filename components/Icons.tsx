
import React from 'react';

// Added IconProps to support dynamic sizing and styling across the widget
export interface IconProps {
  size?: number | string;
  className?: string;
}

export const IconAxs = ({ size = 55, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M30,4.42857143 C44.12271,4.42857143 55.5714286,15.87729 55.5714286,30 C55.5714286,44.12271 44.12271,55.5714286,30,55.5714286 C15.87729,55.5714286 4.42857143,44.12271 4.42857143,30 C4.42857143,15.87729 15.87729,4.42857143,30,4.42857143 Z M30,6.42857143 C16.9818595,6.42857143 6.42857143,16.9818595 6.42857143,30 C6.42857143,43.0181405 16.9818595,53.5714286,30,53.5714286 C43.0181405,53.5714286 53.5714286,43.0181405 53.5714286,30 C53.5714286,16.9818595 43.0181405,6.42857143 30,6.42857143 Z M40.5936329,24.636146 C40.8208154,24.6942382 41.032297,24.8027599 41.212927,24.9537151 C41.3927444,25.1040671 41.5372605,25.2927156 41.6362456,25.506032 C41.7348561,25.7185411 41.7857143,25.9504498 41.7857143,26.1964545 C41.7780029,26.5779794 41.6395197,26.9452414 41.3935596,27.2352841 C41.1463511,27.5267988 40.8059352,27.7221149 40.4376358,27.7856619 C38.1921773,28.2017648 35.924387,28.4827808 33.6481064,28.6271294 C33.504948,28.636723 33.3651112,28.6758744 33.236922,28.7423749 C33.1082304,28.8090766 32.9940039,28.9018917 32.9011681,29.0153772 C32.8079332,29.1293505 32.7382931,29.2617886 32.6966918,29.404413 C32.6758615,29.4759144 32.6622539,29.5492793 32.6556797,29.6151616 L32.6510699,29.707205 L32.6598659,29.8496307 L32.8523035,31.5976067 C33.0926408,33.748446 33.5345387,35.8701755 34.1700609,37.9296172 L34.4174424,38.6989233 L34.6845982,39.467246 L35.9271291,42.8464114 C35.9992453,43.0440742 36.0318055,43.2541674 36.0229684,43.4645736 C36.0141278,43.6750654 35.9640303,43.8817121 35.8754594,44.0726551 C35.7867069,44.2638976 35.6611068,44.435479 35.5058759,44.5773262 C35.3501721,44.7195962 35.1677426,44.8289881 34.990022,44.8912207 C34.813373,44.9615763 34.6253467,44.9984764 34.4204191,45 C34.1147901,44.9943164 33.8175473,44.8987335 33.5650597,44.7252745 C33.4238771,44.6283171 33.2997507,44.5091367 33.1890431,44.3580526 L33.0826737,44.1959755 L33.0074053,44.0456077 L32.6901551,43.3562659 C31.8320879,41.4806152 31.0484874,39.6428286 30.3335907,37.8221303 L30.0024971,36.9627165 L29.5751047,38.0696169 C29.3403684,38.6636654 29.0998399,39.2560704 28.8536693,39.8464776 L28.4802005,40.730546 L27.9043756,42.0504488 L27.3109116,43.3600706 L27.0273167,43.9425803 C26.8810403,44.3389204 26.5849764,44.6608321 26.2034873,44.8369557 C25.8203243,45.0138521 25.3831542,45.0287926 24.9891662,44.8783588 C24.596572,44.7285499 24.2795594,44.4271943 24.1072539,44.0414047 C23.9885793,43.7756939 23.9446874,43.4836867 23.9834048,43.1768668 L24.016611,42.9910892 L24.0667666,42.8262042 L25.307875,39.4507095 C26.0439275,37.4198431 26.5851782,35.3222044 26.9239335,33.1916604 L27.0414597,32.3912301 L27.141282,31.5772235 L27.3403361,29.8381618 C27.3581635,29.6889408 27.3459492,29.5375642 27.3045081,29.3935084 C27.2630999,29.2497044 27.1934915,29.1162414 27.1000261,29.0011883 C27.0070148,28.8866944 26.8923305,28.7928596 26.7631114,28.7253145 C26.6343439,28.6580256 26.4937323,28.6181655 26.35351,28.6082966 C24.0561093,28.4626746 21.7692364,28.17737 19.5069975,27.7542651 C19.3015835,27.7165557 19.1057712,27.6379419 18.9308258,27.5230481 C18.7563857,27.408486 18.6063103,27.2602422 18.4889941,27.0867756 C18.3721069,26.9139017 18.2901967,26.7194847 18.2478998,26.5149205 C18.2055002,26.3103882 18.2034637,26.0993152 18.2403615,25.9020167 C18.2758029,25.695193 18.3515339,25.4974971 18.4633288,25.3201771 C18.5754166,25.1425366 18.7215515,24.9891682 18.8933065,24.8690391 C19.0655425,24.7486376 19.2599761,24.6643395 19.4651939,24.6211361 C19.6706526,24.577882 19.8826185,24.5767675 20.0822706,24.6166765 C26.6343689,25.8477827 33.3528511,25.8477827 39.8979716,24.6180222 C40.1283133,24.5717053 40.3659882,24.5779122 40.5936329,24.636146 Z M32.8056386,16.182956 C34.3520224,17.7551666 34.3520224,20.3006423 32.80563,21.8728616 C31.2542658,23.450066 28.7353061,23.450066 27.1840106,21.8728616 C25.6375563,20.3006489 25.6375563,17.7551599 27.1839933,16.1829647 C28.7352993,14.6056799 31.2542726,14.6056799 32.8056386,16.182956 Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export const IconSpeaker = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
);

export const IconContrast = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20" /><path d="M12 12H2a10 10 0 0 0 10 10V12z" /></svg>
);

export const IconLink = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

export const IconText = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /></svg>
);

export const IconSpacing = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h20" /><path d="M2 12h20" /><path d="M2 17h20" /></svg>
);

export const IconAnimation = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M12 18v-6" /><path d="M8 15v-3" /><path d="M16 15v-3" /></svg>
);

export const IconImage = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
);

export const IconDyslexia = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);

export const IconCursor = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="m13 13 6 6" /></svg>
);

export const IconLineHeight = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7h-9" /><path d="M21 12h-9" /><path d="M21 17h-9" /><path d="M6 18V6" /><polyline points="9 9 6 6 3 9" /><polyline points="9 15 6 18 3 15" /></svg>
);

export const IconAlign = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="17" y1="18" x2="3" y2="18" /></svg>
);

export const IconSaturation = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
);

export const IconClose = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
