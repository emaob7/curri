import * as React from "react"

function Plantilla4(props) {
    const {datos,herra,idi,expe,gene,refe,cursos,educa} = props;
  return (
    <svg
      id="prefix__Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 763.89 1391.14"
      {...props}
    >
      <defs>
        <style>
          {
            ".prefix__cls-1{font-size:28px}.prefix__cls-1,.prefix__cls-11,.prefix__cls-118,.prefix__cls-125,.prefix__cls-13,.prefix__cls-22,.prefix__cls-27,.prefix__cls-53,.prefix__cls-56,.prefix__cls-60,.prefix__cls-81,.prefix__cls-94{font-family:MyriadPro-Regular,Myriad Pro}.prefix__cls-11,.prefix__cls-13,.prefix__cls-60{font-size:20px}.prefix__cls-11{letter-spacing:.02em}.prefix__cls-4{letter-spacing:.01em}.prefix__cls-5{letter-spacing:0}.prefix__cls-6{letter-spacing:.01em}.prefix__cls-7,.prefix__cls-8,.prefix__cls-9{letter-spacing:.02em}.prefix__cls-10{letter-spacing:.01em}.prefix__cls-11{fill:#1d1d1b}.prefix__cls-12,.prefix__cls-125{fill:#00407f}.prefix__cls-13{fill:#fff}.prefix__cls-16,.prefix__cls-17{letter-spacing:0}.prefix__cls-125,.prefix__cls-27,.prefix__cls-94{font-size:16px}.prefix__cls-20,.prefix__cls-27{letter-spacing:0}.prefix__cls-21{letter-spacing:-.01em}.prefix__cls-22{font-size:13px}.prefix__cls-22,.prefix__cls-26,.prefix__cls-41{letter-spacing:0}.prefix__cls-28{letter-spacing:-.01em}.prefix__cls-29,.prefix__cls-30,.prefix__cls-35,.prefix__cls-94{letter-spacing:0}.prefix__cls-43,.prefix__cls-45,.prefix__cls-48{letter-spacing:-.01em}.prefix__cls-49{letter-spacing:0}.prefix__cls-56{font-size:17px}.prefix__cls-51{letter-spacing:0}.prefix__cls-53{font-size:12px;letter-spacing:-.02em}.prefix__cls-54,.prefix__cls-55{letter-spacing:0}.prefix__cls-56{letter-spacing:.01em}.prefix__cls-58{letter-spacing:-.01em}.prefix__cls-64,.prefix__cls-66{letter-spacing:.01em}.prefix__cls-68{letter-spacing:0}.prefix__cls-69{letter-spacing:.01em}.prefix__cls-71{letter-spacing:-.04em}.prefix__cls-73{letter-spacing:.03em}.prefix__cls-74{letter-spacing:-.01em}.prefix__cls-75,.prefix__cls-76,.prefix__cls-79{letter-spacing:0}.prefix__cls-80{letter-spacing:.02em}.prefix__cls-118,.prefix__cls-81{font-size:18px}.prefix__cls-119,.prefix__cls-81,.prefix__cls-84,.prefix__cls-88{letter-spacing:.01em}.prefix__cls-90,.prefix__cls-91{letter-spacing:0}.prefix__cls-125,.prefix__cls-92{letter-spacing:.01em}.prefix__cls-93{letter-spacing:0}.prefix__cls-95{letter-spacing:-.01em}.prefix__cls-96{letter-spacing:0}.prefix__cls-97{letter-spacing:.01em}.prefix__cls-98{letter-spacing:0}.prefix__cls-99{letter-spacing:-.01em}.prefix__cls-100{letter-spacing:.01em}.prefix__cls-101{letter-spacing:-.01em}.prefix__cls-102{letter-spacing:0}.prefix__cls-111,.prefix__cls-116{letter-spacing:.01em}.prefix__cls-118,.prefix__cls-120{letter-spacing:.02em}.prefix__cls-121{letter-spacing:.01em}.prefix__cls-122{letter-spacing:.02em}.prefix__cls-123{letter-spacing:0}.prefix__cls-124{letter-spacing:.01em}.prefix__cls-126{letter-spacing:0}.prefix__cls-127{letter-spacing:-.02em}.prefix__cls-128,.prefix__cls-129{letter-spacing:.02em}.prefix__cls-130{letter-spacing:.01em}.prefix__cls-131{letter-spacing:-.01em}"
          }
        </style>
      </defs>
      <text className="prefix__cls-1" transform="translate(1.59 43.17)">
      {datos[0].nombre}
      </text>
      <path d="M259.29 0v1391.14" fill="none" />
      <text
        transform="translate(.97 101.66)"
        letterSpacing=".02em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
       {datos[0].prof}
      </text>
      
      <path className="prefix__cls-12" d="M.58 121.29h251.71v26.14H.58z" />
      <text className="prefix__cls-13" transform="translate(8.27 140.63)">
        {"Información Personal"}
      </text>
      <text
        transform="translate(10 257.5)"
        letterSpacing="-.07em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"Telefono"}
        
      </text>
      <text className="prefix__cls-22" transform="translate(10.15 275.09)">
      {datos[0].tel}
      </text>
      <text
        transform="translate(10.43 302.8)"
        letterSpacing=".03em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"e-mail"}
      </text>
      <text className="prefix__cls-22" transform="translate(10.97 318.17)">
      {datos[0].email}
      </text>
      <text className="prefix__cls-27" transform="translate(9.52 346.32)">
        {"Dirección"}
      </text>
      <text className="prefix__cls-22" transform="translate(10.06 364.13)">
      {datos[0].dir}
      </text>
      <text
        transform="translate(10.05 392.75)"
        letterSpacing="-.03em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"Web"}
      </text>
      <text
        transform="translate(10.59 409.56)"
        letterSpacing=".01em"
        fontSize={13}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"www.fragment.com"}
        
      </text>
      <path className="prefix__cls-12" d="M.43 426.96h251.71v26.14H.43z" />
      <text className="prefix__cls-13" transform="translate(8.13 446.3)">
        {"Herramientas y Habilidades"}
       
      </text>
      <text className="prefix__cls-27" transform="translate(9.16 173.93)">
        {"Numero de cedula"}
      </text>
      <text className="prefix__cls-22" transform="translate(9.3 191.52)">
      {datos[0].cin}
      </text>
      <text
        transform="translate(9.72 214.08)"
        letterSpacing=".01em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"Registro Profesional N°"}
        
      </text>
      <text className="prefix__cls-22" transform="translate(9.86 232.66)">
      {datos[0].nprof}
      </text>
      <text
        transform="translate(9.36 478.62)"
        letterSpacing={0}
        fontSize={17}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"P"}
        <tspan className="prefix__cls-51" x={8.98} y={0}>
          {"ho"}
        </tspan>
        <tspan x={27.78} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-51" x={33.32} y={0}>
          {"oshop"}
        </tspan>
      </text>
      <text className="prefix__cls-53" transform="translate(9.72 497.01)">
        {"A"}
        <tspan className="prefix__cls-54" x={7.1} y={0}>
          {"v"}
        </tspan>
        <tspan className="prefix__cls-55" x={12.84} y={0}>
          {"anzado"}
        </tspan>
      </text>
      <path className="prefix__cls-12" d="M.58 553.5h251.71v26.14H.58z" />
      <text className="prefix__cls-13" transform="translate(8 572.87)">
        {"Idiomas"}
      </text>
      <text className="prefix__cls-56" transform="translate(9.99 606.74)">
        {"I"}
        <tspan className="prefix__cls-51" x={4.25} y={0}>
          {"ngl\xE9s"}
        </tspan>
      </text>
      <text className="prefix__cls-53" transform="translate(10.35 625.12)">
        {"A"}
        <tspan className="prefix__cls-54" x={7.1} y={0}>
          {"v"}
        </tspan>
        <tspan className="prefix__cls-55" x={12.84} y={0}>
          {"anzado"}
        </tspan>
      </text>
      <path className="prefix__cls-12" d="M0 680.21h251.71v26.14H0z" />
      <text className="prefix__cls-13" transform="translate(7.42 699.58)">
        <tspan className="prefix__cls-17">{"R"}</tspan>
        <tspan x={10.84} y={0}>
          {"e"}
        </tspan>
        <tspan x={20.86} y={0} letterSpacing="-.01em">
          {"f"}
        </tspan>
        <tspan x={26.44} y={0}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-58" x={36.46} y={0}>
          {"r"}
        </tspan>
        <tspan x={42.8} y={0} letterSpacing={0}>
          {"encias"}
        </tspan>
      </text>
      <text className="prefix__cls-56" transform="translate(9.68 736.11)">
        {"I"}
        <tspan className="prefix__cls-51" x={4.25} y={0}>
          {"ngl\xE9s"}
        </tspan>
      </text>
      <text className="prefix__cls-53" transform="translate(10.04 754.5)">
        {"A"}
        <tspan className="prefix__cls-54" x={7.1} y={0}>
          {"v"}
        </tspan>
        <tspan className="prefix__cls-55" x={12.84} y={0}>
          {"anzado"}
        </tspan>
      </text>
      <text className="prefix__cls-60" transform="translate(270.28 41.54)">
        <tspan letterSpacing="-.03em">{"P"}</tspan>
        <tspan x={10.14} y={0}>
          {"e"}
        </tspan>
        <tspan x={20.16} y={0} letterSpacing=".03em">
          {"r"}
        </tspan>
        <tspan x={27.3} y={0}>
          {"fil"}
        </tspan>
      </text>
      <text
        transform="translate(270.44 69.55)"
        letterSpacing="-.01em"
        fontSize={16}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"L"}
        <tspan className="prefix__cls-20" x={7.34} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-48" x={16.14} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-20" x={21.23} y={0}>
          {"em "}
        </tspan>
        <tspan className="prefix__cls-64" x={46.03} y={0}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-20" x={50.03} y={0}>
          {"psum is simply dum"}
        </tspan>
        <tspan className="prefix__cls-21" x={183.2} y={0}>
          {"m"}
        </tspan>
        <tspan className="prefix__cls-20" x={196.35} y={0}>
          {"y "}
        </tspan>
        <tspan className="prefix__cls-30" x={207.31} y={0}>
          {"t"}
        </tspan>
        <tspan x={212.52} y={0} letterSpacing={0}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-66" x={220.51} y={0}>
          {"x"}
        </tspan>
        <tspan className="prefix__cls-20" x={228.14} y={0}>
          {"t of the p"}
        </tspan>
        <tspan x={288.52} y={0} letterSpacing=".01em">
          {"r"}
        </tspan>
        <tspan className="prefix__cls-20" x={293.83} y={0}>
          {"i"}
        </tspan>
        <tspan className="prefix__cls-68" x={297.59} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-20" x={306.43} y={0}>
          {"ting and "}
        </tspan>
        <tspan className="prefix__cls-69" x={365.83} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-20" x={371.29} y={0}>
          {"ypesetting "}
        </tspan>
        <tspan className="prefix__cls-20">
          <tspan x={0} y={19.2}>
            {"indust"}
          </tspan>
          <tspan x={42.19} y={19.2} letterSpacing=".03em">
            {"r"}
          </tspan>
          <tspan className="prefix__cls-71" x={47.84} y={19.2}>
            {"y"}
          </tspan>
          <tspan x={54.77} y={19.2}>
            {". "}
          </tspan>
          <tspan x={61.5} y={19.2}>
            {"L"}
          </tspan>
          <tspan x={68.85} y={19.2}>
            {"o"}
          </tspan>
          <tspan className="prefix__cls-28" x={77.65} y={19.2}>
            {"r"}
          </tspan>
          <tspan className="prefix__cls-49" x={82.73} y={19.2}>
            {"em "}
          </tspan>
          <tspan className="prefix__cls-64" x={107.53} y={19.2}>
            {"I"}
          </tspan>
          <tspan x={111.53} y={19.2}>
            {"psum has been the indust"}
          </tspan>
          <tspan className="prefix__cls-73" x={284.31} y={19.2}>
            {"r"}
          </tspan>
          <tspan x={289.96} y={19.2}>
            {"y&apos;s standa"}
          </tspan>
          <tspan className="prefix__cls-28" x={355.35} y={19.2}>
            {"r"}
          </tspan>
          <tspan x={360.44} y={19.2}>
            {"d dum"}
          </tspan>
          <tspan className="prefix__cls-74" x={404.12} y={19.2}>
            {"m"}
          </tspan>
          <tspan className="prefix__cls-49" x={417.27} y={19.2}>
            {"y "}
          </tspan>
          <tspan className="prefix__cls-75" x={428.23} y={19.2}>
            {"t"}
          </tspan>
          <tspan className="prefix__cls-76" x={433.45} y={19.2}>
            {"e"}
          </tspan>
          <tspan x={441.43} y={19.2} letterSpacing=".01em">
            {"x"}
          </tspan>
          <tspan className="prefix__cls-29" x={449.06} y={19.2}>
            {"t "}
          </tspan>
          <tspan x={0} y={38.4}>
            {"e"}
          </tspan>
          <tspan className="prefix__cls-45" x={8.03} y={38.4}>
            {"v"}
          </tspan>
          <tspan x={15.58} y={38.4} letterSpacing={0}>
            {"er sin"}
          </tspan>
          <tspan className="prefix__cls-30" x={51.28} y={38.4}>
            {"c"}
          </tspan>
          <tspan x={58.37} y={38.4}>
            {"e the 1500"}
          </tspan>
          <tspan className="prefix__cls-58" x={128.35} y={38.4}>
            {"s"}
          </tspan>
          <tspan x={134.53} y={38.4}>
            {", sc"}
          </tspan>
          <tspan className="prefix__cls-79" x={158.2} y={38.4}>
            {"r"}
          </tspan>
          <tspan x={163.37} y={38.4}>
            {"ambled it "}
          </tspan>
          <tspan className="prefix__cls-43" x={230.33} y={38.4}>
            {"t"}
          </tspan>
          <tspan x={235.55} y={38.4}>
            {"o make a "}
          </tspan>
          <tspan className="prefix__cls-69" x={298.94} y={38.4}>
            {"t"}
          </tspan>
          <tspan x={304.39} y={38.4}>
            {"ype specimen boo"}
          </tspan>
          <tspan className="prefix__cls-80" x={427.37} y={38.4}>
            {"k"}
          </tspan>
          <tspan className="prefix__cls-49" x={435.11} y={38.4}>
            {"."}
          </tspan>
        </tspan>
      </text>
      <text className="prefix__cls-60" transform="translate(271.07 139.94)">
        {"Expe"}
        <tspan className="prefix__cls-17" x={40.5} y={0}>
          {"r"}
        </tspan>
        <tspan x={47.12} y={0}>
          {"iencias Especificas"}
        </tspan>
      </text>
      <text className="prefix__cls-22" transform="translate(615.81 176.01)">
        {"12-01-2010 -"}
      </text>
      <text className="prefix__cls-81" transform="translate(270.86 174.64)">
        {"Di"}
        <tspan x={16.63} y={0} letterSpacing={0}>
          {"r"}
        </tspan>
        <tspan x={22.55} y={0}>
          {"e"}
        </tspan>
        <tspan x={31.79} y={0} letterSpacing=".02em">
          {"c"}
        </tspan>
        <tspan className="prefix__cls-84" x={40.3} y={0}>
          {"t"}
        </tspan>
        <tspan x={46.37} y={0}>
          {"or de RR. HH."}
        </tspan>
      </text>
      <text
        transform="translate(686.86 176.52)"
        letterSpacing="-.01em"
        fontSize={13}
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"A"}
        <tspan x={7.81} y={0} letterSpacing=".01em">
          {"c"}
        </tspan>
        <tspan className="prefix__cls-41" x={13.82} y={0}>
          {"tualidad"}
        </tspan>
      </text>
      <text
        transform="translate(271.26 194.29)"
        letterSpacing=".02em"
        fontSize={16}
        fill="#00407f"
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"S"}
        <tspan className="prefix__cls-88" x={8.18} y={0}>
          {"e"}
        </tspan>
        <tspan x={16.38} y={0} letterSpacing=".04em">
          {"r"}
        </tspan>
        <tspan className="prefix__cls-88" x={22.21} y={0}>
          {"vicio Nacional de "}
        </tspan>
        <tspan className="prefix__cls-90" x={142.32} y={0}>
          {"P"}
        </tspan>
        <tspan className="prefix__cls-91" x={150.76} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-92" x={156.03} y={0}>
          {"omoci\xF3n "}
        </tspan>
        <tspan className="prefix__cls-90" x={220.44} y={0}>
          {"P"}
        </tspan>
        <tspan className="prefix__cls-91" x={228.89} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-92" x={234.16} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-93" x={243.13} y={0}>
          {"f"}
        </tspan>
        <tspan className="prefix__cls-92" x={247.79} y={0}>
          {"esional"}
        </tspan>
      </text>
      <text className="prefix__cls-94" transform="translate(271.56 216.91)">
        {"- "}
        <tspan className="prefix__cls-95" x={8.34} y={0}>
          {"L"}
        </tspan>
        <tspan className="prefix__cls-49" x={15.68} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-48" x={24.48} y={0}>
          {"r"}
        </tspan>
        <tspan x={29.57} y={0}>
          {"em "}
        </tspan>
        <tspan className="prefix__cls-64" x={54.37} y={0}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-49" x={58.37} y={0}>
          {"psum is simply dum"}
        </tspan>
        <tspan className="prefix__cls-74" x={191.53} y={0}>
          {"m"}
        </tspan>
        <tspan x={204.68} y={0}>
          {"y "}
        </tspan>
        <tspan className="prefix__cls-43" x={215.64} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-76" x={220.86} y={0}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-66" x={228.84} y={0}>
          {"x"}
        </tspan>
        <tspan className="prefix__cls-49" x={236.47} y={0}>
          {"t of the p"}
        </tspan>
        <tspan className="prefix__cls-96" x={296.86} y={0}>
          {"r"}
        </tspan>
        <tspan x={302.17} y={0}>
          {"i"}
        </tspan>
        <tspan className="prefix__cls-68" x={305.93} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-49" x={314.76} y={0}>
          {"ting and "}
        </tspan>
        <tspan className="prefix__cls-97" x={374.17} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-49" x={379.62} y={0}>
          {"ypesetting "}
        </tspan>
        <tspan x={0} y={19.2}>
          {"- indust"}
        </tspan>
        <tspan className="prefix__cls-73" x={50.53} y={19.2}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-71" x={56.18} y={19.2}>
          {"y"}
        </tspan>
        <tspan x={63.1} y={19.2}>
          {". "}
        </tspan>
        <tspan className="prefix__cls-95" x={69.84} y={19.2}>
          {"L"}
        </tspan>
        <tspan className="prefix__cls-98" x={77.18} y={19.2}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-99" x={85.98} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={91.07} y={19.2}>
          {"em "}
        </tspan>
        <tspan className="prefix__cls-100" x={115.87} y={19.2}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-49" x={119.87} y={19.2}>
          {"psum has been the indust"}
        </tspan>
        <tspan className="prefix__cls-73" x={292.65} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={298.3} y={19.2}>
          {"y&apos;s standa"}
        </tspan>
        <tspan className="prefix__cls-48" x={363.69} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={368.77} y={19.2}>
          {"d dum"}
        </tspan>
        <tspan className="prefix__cls-101" x={412.45} y={19.2}>
          {"m"}
        </tspan>
        <tspan className="prefix__cls-102" x={425.61} y={19.2}>
          {"y "}
        </tspan>
        <tspan className="prefix__cls-75" x={436.57} y={19.2}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-76" x={441.78} y={19.2}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-66" x={449.77} y={19.2}>
          {"x"}
        </tspan>
        <tspan className="prefix__cls-49" x={457.4} y={19.2}>
          {"t "}
        </tspan>
        <tspan x={0} y={38.4}>
          {"- e"}
        </tspan>
        <tspan className="prefix__cls-45" x={16.37} y={38.4}>
          {"v"}
        </tspan>
        <tspan x={23.92} y={38.4}>
          {"er sin"}
        </tspan>
        <tspan className="prefix__cls-43" x={59.61} y={38.4}>
          {"c"}
        </tspan>
        <tspan className="prefix__cls-49" x={66.7} y={38.4}>
          {"e the 1500"}
        </tspan>
        <tspan className="prefix__cls-58" x={136.68} y={38.4}>
          {"s"}
        </tspan>
        <tspan className="prefix__cls-49" x={142.86} y={38.4}>
          {", sc"}
        </tspan>
        <tspan className="prefix__cls-79" x={166.54} y={38.4}>
          {"r"}
        </tspan>
        <tspan x={171.71} y={38.4}>
          {"ambled it "}
        </tspan>
        <tspan className="prefix__cls-43" x={238.67} y={38.4}>
          {"t"}
        </tspan>
        <tspan x={243.88} y={38.4}>
          {"o make a "}
        </tspan>
        <tspan className="prefix__cls-97" x={307.27} y={38.4}>
          {"t"}
        </tspan>
        <tspan x={312.73} y={38.4}>
          {"ype specimen boo"}
        </tspan>
        <tspan className="prefix__cls-80" x={435.7} y={38.4}>
          {"k"}
        </tspan>
        <tspan x={443.44} y={38.4}>
          {"."}
        </tspan>
      </text>
      <text className="prefix__cls-1" transform="translate(1.87 72.58)">
        {"O"}
        <tspan x={19.29} y={0} letterSpacing=".02em">
          {"r"}
        </tspan>
        <tspan x={29.12} y={0}>
          {"tig"}
        </tspan>
        <tspan x={60.59} y={0} letterSpacing="-.01em">
          {"o"}
        </tspan>
        <tspan x={75.77} y={0}>
          {"za "}
        </tspan>
        <tspan x={107.18} y={0} letterSpacing={0}>
          {"B"}
        </tspan>
        <tspan x={122.47} y={0}>
          {"o"}
        </tspan>
        <tspan x={137.84} y={0} letterSpacing="-.01em">
          {"r"}
        </tspan>
        <tspan x={146.72} y={0}>
          {"don"}
        </tspan>
      </text>
      <text className="prefix__cls-60" transform="translate(271.58 298.2)">
        {"Expe"}
        <tspan className="prefix__cls-17" x={40.5} y={0}>
          {"r"}
        </tspan>
        <tspan x={47.12} y={0}>
          {"iencias "}
        </tspan>
        <tspan x={108.36} y={0} letterSpacing={0}>
          {"G"}
        </tspan>
        <tspan x={121.38} y={0}>
          {"ene"}
        </tspan>
        <tspan x={152.52} y={0} letterSpacing={0}>
          {"r"}
        </tspan>
        <tspan x={158.96} y={0}>
          {"ales"}
        </tspan>
      </text>
      <text className="prefix__cls-22" transform="translate(616.33 334.28)">
        {"12-01-2010 -"}
      </text>
      <text className="prefix__cls-81" transform="translate(271.38 332.9)">
        {"No"}
        <tspan x={22.16} y={0} letterSpacing=".02em">
          {"r"}
        </tspan>
        <tspan x={28.33} y={0}>
          {"malizador de Bases de D"}
        </tspan>
        <tspan x={215.04} y={0} letterSpacing=".01em">
          {"a"}
        </tspan>
        <tspan className="prefix__cls-111" x={223.86} y={0}>
          {"t"}
        </tspan>
        <tspan x={229.93} y={0}>
          {"os"}
        </tspan>
      </text>
      <text className="prefix__cls-22" transform="translate(687.37 334.79)">
        {"12-01-2010"}
      </text>
      <text
        transform="translate(271.78 352.56)"
        letterSpacing="-.01em"
        fontSize={16}
        fill="#00407f"
        fontFamily="MyriadPro-Regular,Myriad Pro"
      >
        {"F"}
        <tspan x={7.57} y={0} letterSpacing=".01em">
          {"r"}
        </tspan>
        <tspan x={12.91} y={0} letterSpacing=".01em">
          {"a"}
        </tspan>
        <tspan x={20.82} y={0} letterSpacing=".01em">
          {"g"}
        </tspan>
        <tspan className="prefix__cls-92" x={29.86} y={0}>
          {"me"}
        </tspan>
        <tspan className="prefix__cls-116" x={51.6} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-92" x={60.61} y={0}>
          {"t "}
        </tspan>
        <tspan className="prefix__cls-49" x={69.68} y={0}>
          {"C"}
        </tspan>
        <tspan className="prefix__cls-92" x={78.98} y={0}>
          {"ompa"}
        </tspan>
        <tspan className="prefix__cls-93" x={118.69} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-92" x={127.55} y={0}>
          {"y"}
        </tspan>
      </text>
      <text className="prefix__cls-94" transform="translate(272.08 375.17)">
        {"- "}
        <tspan className="prefix__cls-95" x={8.34} y={0}>
          {"L"}
        </tspan>
        <tspan className="prefix__cls-49" x={15.68} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-48" x={24.48} y={0}>
          {"r"}
        </tspan>
        <tspan x={29.57} y={0}>
          {"em "}
        </tspan>
        <tspan className="prefix__cls-64" x={54.37} y={0}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-49" x={58.37} y={0}>
          {"psum is simply dum"}
        </tspan>
        <tspan className="prefix__cls-74" x={191.53} y={0}>
          {"m"}
        </tspan>
        <tspan x={204.68} y={0}>
          {"y "}
        </tspan>
        <tspan className="prefix__cls-43" x={215.64} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-76" x={220.86} y={0}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-66" x={228.84} y={0}>
          {"x"}
        </tspan>
        <tspan className="prefix__cls-49" x={236.47} y={0}>
          {"t of the p"}
        </tspan>
        <tspan className="prefix__cls-96" x={296.86} y={0}>
          {"r"}
        </tspan>
        <tspan x={302.17} y={0}>
          {"i"}
        </tspan>
        <tspan className="prefix__cls-68" x={305.93} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-49" x={314.76} y={0}>
          {"ting and "}
        </tspan>
        <tspan className="prefix__cls-97" x={374.17} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-49" x={379.62} y={0}>
          {"ypesetting "}
        </tspan>
        <tspan x={0} y={19.2}>
          {"- indust"}
        </tspan>
        <tspan className="prefix__cls-73" x={50.53} y={19.2}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-71" x={56.18} y={19.2}>
          {"y"}
        </tspan>
        <tspan x={63.1} y={19.2}>
          {". "}
        </tspan>
        <tspan className="prefix__cls-95" x={69.84} y={19.2}>
          {"L"}
        </tspan>
        <tspan className="prefix__cls-98" x={77.18} y={19.2}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-99" x={85.98} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={91.07} y={19.2}>
          {"em "}
        </tspan>
        <tspan className="prefix__cls-100" x={115.87} y={19.2}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-49" x={119.87} y={19.2}>
          {"psum has been the indust"}
        </tspan>
        <tspan className="prefix__cls-73" x={292.65} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={298.3} y={19.2}>
          {"y&apos;s standa"}
        </tspan>
        <tspan className="prefix__cls-48" x={363.69} y={19.2}>
          {"r"}
        </tspan>
        <tspan x={368.77} y={19.2}>
          {"d dum"}
        </tspan>
        <tspan className="prefix__cls-101" x={412.45} y={19.2}>
          {"m"}
        </tspan>
        <tspan className="prefix__cls-102" x={425.61} y={19.2}>
          {"y "}
        </tspan>
        <tspan className="prefix__cls-75" x={436.57} y={19.2}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-76" x={441.78} y={19.2}>
          {"e"}
        </tspan>
        <tspan className="prefix__cls-66" x={449.77} y={19.2}>
          {"x"}
        </tspan>
        <tspan className="prefix__cls-49" x={457.4} y={19.2}>
          {"t "}
        </tspan>
        <tspan x={0} y={38.4}>
          {"- e"}
        </tspan>
        <tspan className="prefix__cls-45" x={16.37} y={38.4}>
          {"v"}
        </tspan>
        <tspan x={23.92} y={38.4}>
          {"er sin"}
        </tspan>
        <tspan className="prefix__cls-43" x={59.61} y={38.4}>
          {"c"}
        </tspan>
        <tspan className="prefix__cls-49" x={66.7} y={38.4}>
          {"e the 1500"}
        </tspan>
        <tspan className="prefix__cls-58" x={136.68} y={38.4}>
          {"s"}
        </tspan>
        <tspan className="prefix__cls-49" x={142.86} y={38.4}>
          {", sc"}
        </tspan>
        <tspan className="prefix__cls-79" x={166.54} y={38.4}>
          {"r"}
        </tspan>
        <tspan x={171.71} y={38.4}>
          {"ambled it "}
        </tspan>
        <tspan className="prefix__cls-43" x={238.67} y={38.4}>
          {"t"}
        </tspan>
        <tspan x={243.88} y={38.4}>
          {"o make a "}
        </tspan>
        <tspan className="prefix__cls-97" x={307.27} y={38.4}>
          {"t"}
        </tspan>
        <tspan x={312.73} y={38.4}>
          {"ype specimen boo"}
        </tspan>
        <tspan className="prefix__cls-80" x={435.7} y={38.4}>
          {"k"}
        </tspan>
        <tspan x={443.44} y={38.4}>
          {"."}
        </tspan>
      </text>
      <text className="prefix__cls-60" transform="translate(272.33 453.47)">
        <tspan letterSpacing={0}>{"E"}</tspan>
        <tspan x={9.76} y={0}>
          {"ducaci\xF3n"}
        </tspan>
      </text>
      <text className="prefix__cls-118" transform="translate(272.12 488.17)">
        {"I"}
        <tspan className="prefix__cls-119" x={4.7} y={0}>
          {"ngenie"}
        </tspan>
        <tspan className="prefix__cls-120" x={58.28} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-121" x={64.46} y={0}>
          {"ia de Sis"}
        </tspan>
        <tspan className="prefix__cls-111" x={126.3} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-119" x={132.37} y={0}>
          {"emas "}
        </tspan>
        <tspan className="prefix__cls-122" x={177.1} y={0}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-121" x={181.8} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-123" x={192} y={0}>
          {"f"}
        </tspan>
        <tspan className="prefix__cls-119" x={197.24} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-120" x={207.34} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-119" x={213.51} y={0}>
          {"m"}
        </tspan>
        <tspan className="prefix__cls-124" x={228.74} y={0}>
          {"\xE1"}
        </tspan>
        <tspan className="prefix__cls-119" x={237.56} y={0}>
          {"ti"}
        </tspan>
        <tspan className="prefix__cls-84" x={248.16} y={0}>
          {"c"}
        </tspan>
        <tspan className="prefix__cls-119" x={256.33} y={0}>
          {"os"}
        </tspan>
      </text>
      <text className="prefix__cls-22" transform="translate(688.12 490.05)">
        {"12-01-2019"}
      </text>
      <text className="prefix__cls-125" transform="translate(272.52 507.82)">
        {"Uni"}
        <tspan className="prefix__cls-126" x={23.55} y={0}>
          {"v"}
        </tspan>
        <tspan x={31.28} y={0}>
          {"ersidad Nacional de"}
        </tspan>
        <tspan className="prefix__cls-127" x={166.14} y={0} />
        <tspan className="prefix__cls-90" x={169.15} y={0}>
          {"V"}
        </tspan>
        <tspan x={178.01} y={0}>
          {"illa"}
        </tspan>
        <tspan className="prefix__cls-128" x={197.79} y={0}>
          {"rr"}
        </tspan>
        <tspan className="prefix__cls-88" x={208.77} y={0}>
          {"ica del Espi"}
        </tspan>
        <tspan className="prefix__cls-129" x={284.35} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-88" x={289.83} y={0}>
          {"itu "}
        </tspan>
        <tspan className="prefix__cls-80" x={311.85} y={0}>
          {"S"}
        </tspan>
        <tspan className="prefix__cls-88" x={319.98} y={0}>
          {"a"}
        </tspan>
        <tspan className="prefix__cls-116" x={327.88} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-130" x={336.89} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-88" x={342.28} y={0}>
          {"o"}
        </tspan>
      </text>
      <text className="prefix__cls-60" transform="translate(273.47 541.98)">
        <tspan className="prefix__cls-131">{"C"}</tspan>
        <tspan x={11.36} y={0}>
          {"ursos y "}
        </tspan>
        <tspan x={73.64} y={0} letterSpacing="-.01em">
          {"C"}
        </tspan>
        <tspan className="prefix__cls-16" x={85.1} y={0}>
          {"apacitaciones "}
        </tspan>
        <tspan className="prefix__cls-131" x={203.56} y={0}>
          {"A"}
        </tspan>
        <tspan x={215.56} y={0}>
          {"dicionales"}
        </tspan>
      </text>
      <text className="prefix__cls-118" transform="translate(273.26 576.68)">
        {"I"}
        <tspan className="prefix__cls-119" x={4.7} y={0}>
          {"ngenie"}
        </tspan>
        <tspan className="prefix__cls-120" x={58.28} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-121" x={64.46} y={0}>
          {"ia de Sis"}
        </tspan>
        <tspan className="prefix__cls-111" x={126.3} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-119" x={132.37} y={0}>
          {"emas "}
        </tspan>
        <tspan className="prefix__cls-122" x={177.1} y={0}>
          {"I"}
        </tspan>
        <tspan className="prefix__cls-121" x={181.8} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-123" x={192} y={0}>
          {"f"}
        </tspan>
        <tspan className="prefix__cls-119" x={197.24} y={0}>
          {"o"}
        </tspan>
        <tspan className="prefix__cls-120" x={207.34} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-119" x={213.51} y={0}>
          {"m"}
        </tspan>
        <tspan className="prefix__cls-124" x={228.74} y={0}>
          {"\xE1"}
        </tspan>
        <tspan className="prefix__cls-119" x={237.56} y={0}>
          {"ti"}
        </tspan>
        <tspan className="prefix__cls-84" x={248.16} y={0}>
          {"c"}
        </tspan>
        <tspan className="prefix__cls-119" x={256.33} y={0}>
          {"os"}
        </tspan>
      </text>
      <text className="prefix__cls-22" transform="translate(689.26 578.56)">
        {"40 H"}
        <tspan x={24.62} y={0} letterSpacing="-.01em">
          {"s"}
        </tspan>
        <tspan className="prefix__cls-29" x={29.64} y={0}>
          {"."}
        </tspan>
      </text>
      <text className="prefix__cls-125" transform="translate(273.67 596.33)">
        {"Uni"}
        <tspan className="prefix__cls-126" x={23.55} y={0}>
          {"v"}
        </tspan>
        <tspan x={31.28} y={0}>
          {"ersidad Nacional de"}
        </tspan>
        <tspan className="prefix__cls-127" x={166.14} y={0} />
        <tspan className="prefix__cls-90" x={169.15} y={0}>
          {"V"}
        </tspan>
        <tspan x={178.01} y={0}>
          {"illa"}
        </tspan>
        <tspan className="prefix__cls-128" x={197.79} y={0}>
          {"rr"}
        </tspan>
        <tspan className="prefix__cls-88" x={208.77} y={0}>
          {"ica del Espi"}
        </tspan>
        <tspan className="prefix__cls-129" x={284.35} y={0}>
          {"r"}
        </tspan>
        <tspan className="prefix__cls-88" x={289.83} y={0}>
          {"itu "}
        </tspan>
        <tspan className="prefix__cls-80" x={311.85} y={0}>
          {"S"}
        </tspan>
        <tspan className="prefix__cls-88" x={319.98} y={0}>
          {"a"}
        </tspan>
        <tspan className="prefix__cls-116" x={327.88} y={0}>
          {"n"}
        </tspan>
        <tspan className="prefix__cls-130" x={336.89} y={0}>
          {"t"}
        </tspan>
        <tspan className="prefix__cls-88" x={342.28} y={0}>
          {"o"}
        </tspan>
      </text>
      <path
        d="M270.08 120.57h492.93V122H270.08zm.25 154.64h492.93v1.43H270.33zm0 154.29h492.93v1.43H270.33zm.57 90h492.93v1.43H270.9z"
        fill="#e8eaf6"
      />
    </svg>
  )
}

export default Plantilla4
