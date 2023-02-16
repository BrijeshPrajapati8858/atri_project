import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex138Cb, useFlex137Cb, useDiv298Cb, useFlex165Cb, useFlex164Cb, useDiv299Cb, useFlex139Cb, useDiv300Cb, useFlex140Cb, useDiv301Cb, useDiv312Cb, useFlex145Cb, useDiv316Cb, useFlex146Cb, useDiv317Cb, useDiv318Cb, useDiv319Cb, useDiv321Cb, useDiv322Cb, useDiv323Cb, useDiv325Cb, useFlex151Cb, useDiv332Cb, useFlex152Cb, useDiv333Cb, useFlex153Cb, useDiv336Cb, useFlex154Cb, useDiv339Cb, useFlex155Cb, useDiv340Cb, useFlex158Cb, useDiv331Cb, useFlex147Cb, useDiv326Cb, useDiv327Cb, useFlex148Cb, useFlex150Cb, useDiv329Cb, useFlex149Cb, useDiv330Cb, useButton40Cb, useButton41Cb, useTextBox297Cb, useTextBox298Cb, useTextBox299Cb, useTextBox300Cb, useTextBox301Cb, useImage67Cb, useImage69Cb, useTextBox250Cb, useTextBox251Cb, useImage68Cb, useDiv313Cb, useDiv314Cb, useTextBox252Cb, useDiv334Cb, useTextBox261Cb, useTextBox262Cb, useImage72Cb, useTextBox263Cb, useTextBox264Cb, useTextBox265Cb, useTextBox266Cb, useTextBox267Cb, useTextBox268Cb, useImage73Cb, useImage76Cb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useImage70Cb, useTextBox253Cb, useTextBox254Cb, useTextBox255Cb, useButton42Cb, useButton43Cb, useTextBox256Cb, useTextBox257Cb, useTextBox258Cb, useImage71Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex138Props = useStore((state)=>state["About"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["About"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex137Props = useStore((state)=>state["About"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["About"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Div298Props = useStore((state)=>state["About"]["Div298"]);
const Div298IoProps = useIoStore((state)=>state["About"]["Div298"]);
const Div298Cb = useDiv298Cb()
const Flex165Props = useStore((state)=>state["About"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["About"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex164Props = useStore((state)=>state["About"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["About"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Div299Props = useStore((state)=>state["About"]["Div299"]);
const Div299IoProps = useIoStore((state)=>state["About"]["Div299"]);
const Div299Cb = useDiv299Cb()
const Flex139Props = useStore((state)=>state["About"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["About"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Div300Props = useStore((state)=>state["About"]["Div300"]);
const Div300IoProps = useIoStore((state)=>state["About"]["Div300"]);
const Div300Cb = useDiv300Cb()
const Flex140Props = useStore((state)=>state["About"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["About"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Div301Props = useStore((state)=>state["About"]["Div301"]);
const Div301IoProps = useIoStore((state)=>state["About"]["Div301"]);
const Div301Cb = useDiv301Cb()
const Div312Props = useStore((state)=>state["About"]["Div312"]);
const Div312IoProps = useIoStore((state)=>state["About"]["Div312"]);
const Div312Cb = useDiv312Cb()
const Flex145Props = useStore((state)=>state["About"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["About"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Div316Props = useStore((state)=>state["About"]["Div316"]);
const Div316IoProps = useIoStore((state)=>state["About"]["Div316"]);
const Div316Cb = useDiv316Cb()
const Flex146Props = useStore((state)=>state["About"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["About"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div317Props = useStore((state)=>state["About"]["Div317"]);
const Div317IoProps = useIoStore((state)=>state["About"]["Div317"]);
const Div317Cb = useDiv317Cb()
const Div318Props = useStore((state)=>state["About"]["Div318"]);
const Div318IoProps = useIoStore((state)=>state["About"]["Div318"]);
const Div318Cb = useDiv318Cb()
const Div319Props = useStore((state)=>state["About"]["Div319"]);
const Div319IoProps = useIoStore((state)=>state["About"]["Div319"]);
const Div319Cb = useDiv319Cb()
const Div321Props = useStore((state)=>state["About"]["Div321"]);
const Div321IoProps = useIoStore((state)=>state["About"]["Div321"]);
const Div321Cb = useDiv321Cb()
const Div322Props = useStore((state)=>state["About"]["Div322"]);
const Div322IoProps = useIoStore((state)=>state["About"]["Div322"]);
const Div322Cb = useDiv322Cb()
const Div323Props = useStore((state)=>state["About"]["Div323"]);
const Div323IoProps = useIoStore((state)=>state["About"]["Div323"]);
const Div323Cb = useDiv323Cb()
const Div325Props = useStore((state)=>state["About"]["Div325"]);
const Div325IoProps = useIoStore((state)=>state["About"]["Div325"]);
const Div325Cb = useDiv325Cb()
const Flex151Props = useStore((state)=>state["About"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["About"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Div332Props = useStore((state)=>state["About"]["Div332"]);
const Div332IoProps = useIoStore((state)=>state["About"]["Div332"]);
const Div332Cb = useDiv332Cb()
const Flex152Props = useStore((state)=>state["About"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["About"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Div333Props = useStore((state)=>state["About"]["Div333"]);
const Div333IoProps = useIoStore((state)=>state["About"]["Div333"]);
const Div333Cb = useDiv333Cb()
const Flex153Props = useStore((state)=>state["About"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["About"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Div336Props = useStore((state)=>state["About"]["Div336"]);
const Div336IoProps = useIoStore((state)=>state["About"]["Div336"]);
const Div336Cb = useDiv336Cb()
const Flex154Props = useStore((state)=>state["About"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["About"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Div339Props = useStore((state)=>state["About"]["Div339"]);
const Div339IoProps = useIoStore((state)=>state["About"]["Div339"]);
const Div339Cb = useDiv339Cb()
const Flex155Props = useStore((state)=>state["About"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["About"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Div340Props = useStore((state)=>state["About"]["Div340"]);
const Div340IoProps = useIoStore((state)=>state["About"]["Div340"]);
const Div340Cb = useDiv340Cb()
const Flex158Props = useStore((state)=>state["About"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["About"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Div331Props = useStore((state)=>state["About"]["Div331"]);
const Div331IoProps = useIoStore((state)=>state["About"]["Div331"]);
const Div331Cb = useDiv331Cb()
const Flex147Props = useStore((state)=>state["About"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["About"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Div326Props = useStore((state)=>state["About"]["Div326"]);
const Div326IoProps = useIoStore((state)=>state["About"]["Div326"]);
const Div326Cb = useDiv326Cb()
const Div327Props = useStore((state)=>state["About"]["Div327"]);
const Div327IoProps = useIoStore((state)=>state["About"]["Div327"]);
const Div327Cb = useDiv327Cb()
const Flex148Props = useStore((state)=>state["About"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["About"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex150Props = useStore((state)=>state["About"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["About"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Div329Props = useStore((state)=>state["About"]["Div329"]);
const Div329IoProps = useIoStore((state)=>state["About"]["Div329"]);
const Div329Cb = useDiv329Cb()
const Flex149Props = useStore((state)=>state["About"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["About"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Div330Props = useStore((state)=>state["About"]["Div330"]);
const Div330IoProps = useIoStore((state)=>state["About"]["Div330"]);
const Div330Cb = useDiv330Cb()
const Button40Props = useStore((state)=>state["About"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["About"]["Button40"]);
const Button40Cb = useButton40Cb()
const Button41Props = useStore((state)=>state["About"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["About"]["Button41"]);
const Button41Cb = useButton41Cb()
const TextBox297Props = useStore((state)=>state["About"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["About"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox298Props = useStore((state)=>state["About"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["About"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox299Props = useStore((state)=>state["About"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["About"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const TextBox300Props = useStore((state)=>state["About"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["About"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["About"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["About"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Image67Props = useStore((state)=>state["About"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["About"]["Image67"]);
const Image67Cb = useImage67Cb()
const Image69Props = useStore((state)=>state["About"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["About"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox250Props = useStore((state)=>state["About"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["About"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox251Props = useStore((state)=>state["About"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["About"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const Image68Props = useStore((state)=>state["About"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["About"]["Image68"]);
const Image68Cb = useImage68Cb()
const Div313Props = useStore((state)=>state["About"]["Div313"]);
const Div313IoProps = useIoStore((state)=>state["About"]["Div313"]);
const Div313Cb = useDiv313Cb()
const Div314Props = useStore((state)=>state["About"]["Div314"]);
const Div314IoProps = useIoStore((state)=>state["About"]["Div314"]);
const Div314Cb = useDiv314Cb()
const TextBox252Props = useStore((state)=>state["About"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["About"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const Div334Props = useStore((state)=>state["About"]["Div334"]);
const Div334IoProps = useIoStore((state)=>state["About"]["Div334"]);
const Div334Cb = useDiv334Cb()
const TextBox261Props = useStore((state)=>state["About"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["About"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox262Props = useStore((state)=>state["About"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["About"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const Image72Props = useStore((state)=>state["About"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["About"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox263Props = useStore((state)=>state["About"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["About"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox264Props = useStore((state)=>state["About"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["About"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox265Props = useStore((state)=>state["About"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["About"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox266Props = useStore((state)=>state["About"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["About"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const TextBox267Props = useStore((state)=>state["About"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["About"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const TextBox268Props = useStore((state)=>state["About"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["About"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const Image73Props = useStore((state)=>state["About"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["About"]["Image73"]);
const Image73Cb = useImage73Cb()
const Image76Props = useStore((state)=>state["About"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["About"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox275Props = useStore((state)=>state["About"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["About"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["About"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["About"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["About"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["About"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const Image70Props = useStore((state)=>state["About"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["About"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox253Props = useStore((state)=>state["About"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["About"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["About"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["About"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox255Props = useStore((state)=>state["About"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["About"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const Button42Props = useStore((state)=>state["About"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["About"]["Button42"]);
const Button42Cb = useButton42Cb()
const Button43Props = useStore((state)=>state["About"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["About"]["Button43"]);
const Button43Cb = useButton43Cb()
const TextBox256Props = useStore((state)=>state["About"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["About"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["About"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["About"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["About"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["About"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const Image71Props = useStore((state)=>state["About"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["About"]["Image71"]);
const Image71Cb = useImage71Cb()

  return (<>
  <Flex1 className="p-About Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Div1 className="p-About Div299 bpt" {...Div299Props} {...Div299Cb} {...Div299IoProps}>
<Image1 className="p-About Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Div1>
<Div1 className="p-About Div298 bpt" {...Div298Props} {...Div298Cb} {...Div298IoProps}>
<Flex1 className="p-About Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<Flex1 className="p-About Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<TextBox1 className="p-About TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<TextBox1 className="p-About TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<TextBox1 className="p-About TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
<TextBox1 className="p-About TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<TextBox1 className="p-About TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
</Flex1>
</Flex1>
</Div1>
<Flex1 className="p-About Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Button1 className="p-About Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
<Button1 className="p-About Button40 bpt" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Div1 className="p-About Div300 bpt" {...Div300Props} {...Div300Cb} {...Div300IoProps}>
<Flex1 className="p-About Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<TextBox1 className="p-About TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox1 className="p-About TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
</Flex1>
<Image1 className="p-About Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Div1>
<Div1 className="p-About Div301 bpt" {...Div301Props} {...Div301Cb} {...Div301IoProps}>
<Image1 className="p-About Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Div1>
</Flex1>
<Div1 className="p-About Div312 bpt" {...Div312Props} {...Div312Cb} {...Div312IoProps}>
<Flex1 className="p-About Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Div1 className="p-About Div313 bpt" {...Div313Props} {...Div313Cb} {...Div313IoProps}/>
<Div1 className="p-About Div314 bpt" {...Div314Props} {...Div314Cb} {...Div314IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-About Div316 bpt" {...Div316Props} {...Div316Cb} {...Div316IoProps}>
<Flex1 className="p-About Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Div1 className="p-About Div317 bpt" {...Div317Props} {...Div317Cb} {...Div317IoProps}>
<TextBox1 className="p-About TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
</Div1>
<Div1 className="p-About Div318 bpt" {...Div318Props} {...Div318Cb} {...Div318IoProps}/>
<Div1 className="p-About Div319 bpt" {...Div319Props} {...Div319Cb} {...Div319IoProps}/>
<Div1 className="p-About Div321 bpt" {...Div321Props} {...Div321Cb} {...Div321IoProps}/>
<Div1 className="p-About Div322 bpt" {...Div322Props} {...Div322Cb} {...Div322IoProps}>
<Div1 className="p-About Div323 bpt" {...Div323Props} {...Div323Cb} {...Div323IoProps}/>
</Div1>
</Flex1>
</Div1>
<Div1 className="p-About Div331 bpt" {...Div331Props} {...Div331Cb} {...Div331IoProps}>
<Flex1 className="p-About Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Div1 className="p-About Div326 bpt" {...Div326Props} {...Div326Cb} {...Div326IoProps}>
<Image1 className="p-About Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Div1>
<Div1 className="p-About Div327 bpt" {...Div327Props} {...Div327Cb} {...Div327IoProps}>
<Flex1 className="p-About Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<TextBox1 className="p-About TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox1 className="p-About TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<TextBox1 className="p-About TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<Button1 className="p-About Button42 bpt" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
</Flex1>
</Div1>
</Flex1>
<Flex1 className="p-About Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Div1 className="p-About Div330 bpt" {...Div330Props} {...Div330Cb} {...Div330IoProps}>
<Image1 className="p-About Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Div1>
<Div1 className="p-About Div329 bpt" {...Div329Props} {...Div329Cb} {...Div329IoProps}>
<Flex1 className="p-About Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<TextBox1 className="p-About TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<TextBox1 className="p-About TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<TextBox1 className="p-About TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
<Button1 className="p-About Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
</Flex1>
</Div1>
</Flex1>
</Div1>
<Div1 className="p-About Div325 bpt" {...Div325Props} {...Div325Cb} {...Div325IoProps}>
<Flex1 className="p-About Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Div1 className="p-About Div332 bpt" {...Div332Props} {...Div332Cb} {...Div332IoProps}>
<Flex1 className="p-About Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox1 className="p-About TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox1 className="p-About TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-About Div333 bpt" {...Div333Props} {...Div333Cb} {...Div333IoProps}>
<Flex1 className="p-About Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Div1 className="p-About Div336 bpt" {...Div336Props} {...Div336Cb} {...Div336IoProps}>
<Flex1 className="p-About Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image1 className="p-About Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox1 className="p-About TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
<TextBox1 className="p-About TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
<TextBox1 className="p-About TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-About Div339 bpt" {...Div339Props} {...Div339Cb} {...Div339IoProps}>
<Flex1 className="p-About Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Image1 className="p-About Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<TextBox1 className="p-About TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
<TextBox1 className="p-About TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<TextBox1 className="p-About TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
</Flex1>
</Div1>
<Div1 className="p-About Div340 bpt" {...Div340Props} {...Div340Cb} {...Div340IoProps}>
<Flex1 className="p-About Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Image1 className="p-About Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<TextBox1 className="p-About TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<TextBox1 className="p-About TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
<TextBox1 className="p-About TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
</Flex1>
</Div1>
</Flex1>
</Div1>
<Div1 className="p-About Div334 bpt" {...Div334Props} {...Div334Cb} {...Div334IoProps}/>
</Flex1>
</Div1>
  </>);
}
