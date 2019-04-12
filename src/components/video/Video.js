import React, { Fragment } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, flexCenteredAll, media, flexColumn, animationFadeIn } from './../../styles/mixins'
import { spacing, colors } from './../../styles/theme'
import Close from './../utils/Close'

export default props => {
  return (
    <Fragment>
      <ModalContentWrapper>
        <VideoSection>
          <VideoWrapper>
            <Close clickFunction={props.clickFunction}/>
            <VideoContainer>
              <VideoInner>
                <ReactPlayer 
                  url={props.data.video}
                  playing
                  className='player'
                  width={'100%'}
                  height={'100%'}
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 0,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        playsinline: 1
                      }
                    },
                    vimeo: {
                      playerVars: {
                        showinfo: 0,
                        controls: 1
                      }
                    }
                  }}
                />
              </VideoInner>
            </VideoContainer>
            <VideoBG>
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="1076" height="601" viewBox="0 0 1076 601">
                <path fill={colors.black} fillRule="evenodd" d="M12.8208282,178.94485 C11.234429,176.977015 9.22720485,176.179357 6.9057463,177.000557 C5.45085486,181.591247 6.59289619,187.817414 6.59151189,192.575668 C6.58597472,206.814423 6.6095077,220.61142 8.20559697,234.765702 C10.9672606,259.250767 6.91958922,284.101426 6.69948671,308.550485 C6.57905326,321.89326 2.47601023,334.662718 2.28359357,347.991645 C2.07041252,362.659696 2.43863433,377.376216 2.43863433,392.049806 C2.43863433,426.07769 1.32151027,460.194203 4.05271941,494.096068 C5.94920017,517.633914 4.51507311,541.799085 4.51507311,565.413096 C4.51507311,576.113628 5.53668099,587.383322 4.05271941,597.997994 C2.25729201,610.845002 3.10309474,623.176856 2.54660915,636.095875 C2.00396648,648.661764 0.335893996,660.74158 0.369117017,673.419639 C0.395418575,683.214496 0.362195554,693.009353 0.362195554,702.80421 C0.362195554,710.068994 -0.705093979,718.190985 0.824549256,725.302053 C2.02611516,726.733961 2.60198085,728.406828 2.55353061,730.322039 C3.10032616,733.382499 1.46962957,736.643758 2.75286874,739.580969 C6.83653167,740.384167 11.2039746,739.564351 15.3665422,739.749918 C20.945241,739.999186 26.3107588,741.53634 31.8700776,742.329844 C39.6857932,743.447396 46.8965729,744.066413 54.9254695,743.959781 C65.4308655,743.819914 74.4647584,747.768046 84.9272413,747.992387 C90.7260427,748.117021 94.9232176,750.770343 100.44516,751.865739 C106.653712,753.098232 112.488505,752.667552 118.726127,754.339034 C132.264508,757.967271 147.756126,758.778778 161.725022,760.156677 C183.690975,762.322541 206.587174,760.563815 228.637569,760.57074 C253.518843,760.579049 278.222927,762.742143 303.044677,762.743528 C325.615566,762.744913 347.99127,760.493189 370.643833,760.57074 C400.161103,760.670447 429.836181,759.973881 459.292542,757.983889 C479.443688,756.621223 499.254298,756.831716 519.430362,756.515976 C555.572855,755.952353 591.34159,751.411517 627.594826,752.162091 C676.482501,753.174397 725.588894,755.50644 774.38659,758.493504 C795.166205,759.766157 815.886295,761.162059 836.600848,763.217137 C860.842579,765.621191 885.224123,764.72521 909.558601,764.72521 C939.446861,764.72521 969.336505,764.636582 999.224765,764.718286 C1004.53906,764.732134 1010.55797,765.536717 1015.82935,764.362386 C1020.00023,763.434555 1024.3123,761.195295 1028.50532,760.052816 C1038.12754,757.431345 1048.0363,756.021594 1057.20724,752.310267 C1064.70042,749.277504 1066.39479,748.295664 1063.48501,741.039188 C1059.20893,730.381586 1061.21062,717.545657 1063.4504,706.598627 C1066.83638,690.049985 1065.9795,672.962647 1069.72817,656.642502 C1071.75477,647.821176 1071.3201,639.689492 1072.20051,630.714451 C1073.59588,616.461847 1076.08761,604.016438 1075.99763,589.503487 C1075.72354,544.895551 1075.95748,500.28069 1075.95748,455.671369 C1075.95748,429.509283 1075.91595,403.636625 1074.33509,377.53824 C1073.48929,363.558446 1074.30325,349.610504 1073.427,335.629325 C1072.48983,320.696773 1073.07816,305.235218 1071.45715,290.405142 C1070.50337,281.677984 1067.76247,273.482599 1067.54375,264.654349 C1067.33196,256.065673 1067.01495,248.032312 1066.03764,239.483796 C1064.7724,228.428749 1065.64727,217.139668 1065.58221,206.023689 C1065.5393,198.56503 1067.3278,191.909568 1067.70018,184.673865 C1067.96458,179.520936 1066.46954,173.589737 1068.81592,168.765012 C1066.44463,174.037035 1041.72116,170.917027 1036.47885,170.74254 C1026.70851,170.419876 1017.13751,168.662535 1007.33949,168.452042 C997.756031,168.242933 987.766976,169.647144 978.261039,168.151535 C972.60482,167.261093 968.141861,165.278026 962.149258,165.232327 C945.6125,165.106308 928.440351,167.783172 911.868986,168.443733 C892.506886,169.216464 873.436872,172.422331 854.069236,173.024729 C833.825342,173.653439 814.834233,170.044589 794.850586,168.443733 C788.680794,167.950735 783.246062,167.129535 777.202241,165.863806 C764.81836,163.272801 752.487082,165.977362 740.040908,167.017364 C697.522363,170.573591 655.344354,172.767152 612.673537,172.706219 C580.346154,172.659135 547.975858,172.271385 515.652628,172.613436 C474.51007,173.048271 433.6153,178.932386 392.409064,176.445243 C366.831492,174.90255 341.48648,171.416949 316.036262,168.921497 C286.016494,165.974592 254.648426,168.558673 224.473617,168.558673 L105.751154,168.558673 C91.3558958,168.558673 76.9606379,168.490817 62.5667642,168.551749 C51.4453581,168.597448 40.8181445,166.784714 29.7382671,166.481438 C22.1454227,166.275099 14.0113198,162.897514 6.46969415,164.370967 C0.546306459,165.527294 2.49954321,168.994892 2.43863433,174.790379" transform="translate(0 -164)"/>
              </svg>
            </VideoBG>
          </VideoWrapper>
        </VideoSection>
      </ModalContentWrapper>
    </Fragment>
  )
}

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VideoInner = styled.div`
  ${absoluteTopFull};
  .player {
    ${animationFadeIn(250, 10)};
    ${absoluteTopFull};
    z-index: 100;
    width: 100%;
    height: 100%;
  }
  div {
    background-color: transparent!important;
  }
`

const VideoSection = styled.section`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const VideoWrapper = styled.div`
  ${flexColumn};
  width: 90%;
  padding: ${spacing.double_pad} 2rem;
  margin-bottom: 4rem;
  position: relative;
  .close-button-wrapper {
    top: -1rem!important;
    right: -1rem!important;
  }
  ${media.desktop`
    width: 80vw;
    max-width: 96rem;
    padding: 0;
    padding: 8rem;
    margin-bottom: 0;
  `}
  ${media.big`
    width: 85vw;
    max-width: 126rem;
    padding: 0;
    padding: 6rem;
    margin-bottom: 0;
  `}
`

const VideoBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`