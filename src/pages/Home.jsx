import React,{createElement as h} from "react";
import {useData,isPast,byDate} from "../data/store.js";
import {A,EventCard,Cta} from "../components/ui.jsx";
import {asset,MarkImg,PArt,hasPhoto} from "../components/Brand.jsx";
import {PR} from "../data/programs.js";
import {PostCard} from "./PublicPages.jsx";

export function Home(){const[ev]=useData("events"),[po]=useData("posts");
const up=ev.filter(e=>e.pub&&!isPast(e)).sort(byDate).slice(0,3),bl=po.filter(p=>p.pub).slice(0,3),U=i=>({"--i":i});
return h("div",null,
h("div",{className:"wrap hero"},
 h("div",null,h("div",{className:"eyebrow in-up",style:U(0)},"Speaker · Trainer · Author"),
  h("h1",{className:"in-up",style:U(1)},"Find the voice you were ",h("em",null,"afraid")," to use."),
  h("p",{className:"lead in-up",style:U(2)},"Miyagi helps students, professionals and teams speak with clarity, lead with empathy and act with confidence."),
  h("div",{className:"ctas in-up",style:U(3)},A("/events",{className:"btn"},"Explore Events"),A("/programs",{className:"btn alt"},"Discover My Programs"))),
 h("figure",{className:"hero-fig in-up",style:U(2)},h("img",{src:asset("speaker-hero.jpg"),alt:"A cheerful student giving two thumbs up at a Miyagi workshop",width:1800,height:1200,fetchPriority:"high"}))),
h("section",{className:"band rv"},h("div",{className:"wrap two"},h("div",{className:"mark-box"},h(MarkImg)),h("div",null,h("div",{className:"eyebrow"},"Meet Miyagi"),h("h2",null,"The Communication Champ"),h("p",null,"Miyagi began as a debate coach in a small school. The lesson has never changed: people grow when they are given a safe place to practise being heard."),h("p",{className:"quote"},"Mission: help one million people speak with clarity and courage."),A("/about",{className:"btn alt"},"Read the story")))),
h("section",{className:"wrap rv"},h("div",{className:"row"},h("div",null,h("div",{className:"eyebrow"},"Upcoming events"),h("h2",{style:{margin:0}},"Next on the calendar")),A("/events",{className:"btn alt"},"All events")),h("div",{className:"grid"},up.length?up.map(e=>h(EventCard,{key:e.id,e})):h("p",{className:"mut"},"New events are announced soon."))),
h("section",{className:"band rv"},h("div",{className:"wrap"},h("div",{className:"row"},h("div",null,h("div",{className:"eyebrow"},"Programs"),h("h2",{style:{margin:0}},"Skills you can practise")),A("/programs",{className:"btn alt"},"All 8 programs")),h("div",{className:"grid"},PR.slice(0,6).map(p=>h("article",{className:"ev",key:p.s},h("div",{className:"poster"+(hasPhoto(p.s)?" has-img":"")},h(PArt,{p})),h("div",{className:"body"},h("h3",null,p.t),h("p",{className:"mut"},p.d),A("/programs/"+p.s,{className:"btn alt"},"View program"))))))),
h("section",{className:"dark rv"},h("div",{className:"wrap approach"},h("div",null,h("div",{className:"eyebrow"},"Our approach"),h("h2",null,"Speak to be understood. Lead to be trusted."),h("p",{className:"mut"},"Practise in small steps, get honest feedback, repeat. No tricks, no scripts, just habits that last.")),h("div",null,h("div",{className:"stats"},[["120+","talks delivered"],["40","campuses visited"],["8","signature programs"],["3","languages"]].map(([n,l])=>h("div",{className:"stat",key:l},h("b",null,n),l))),h("p",{className:"mut",style:{fontSize:".8rem",marginTop:20,marginBottom:0}},"Sample figures, demo content.")))),
h("section",{className:"wrap rv"},h("div",{className:"eyebrow"},"Testimonials"),h("h2",null,"What attendees say"),h("div",{className:"tgrid"},[["I stopped dreading presentations after one session.","Student"],["Our managers now actually listen in one-to-ones.","HR lead"],["Clear, warm and practical. No fluff.","Teacher"]].map(([q,a])=>h("blockquote",{key:q},h("p",null,"“"+q+"”"),h("small",{className:"mut"},a+" · fictional demo testimonial"))))),
h("section",{className:"band rv"},h("div",{className:"wrap"},h("div",{className:"row"},h("div",null,h("div",{className:"eyebrow"},"Journal"),h("h2",{style:{margin:0}},"Latest articles")),A("/blog",{className:"btn alt"},"All articles")),h("div",{className:"grid"},bl.map(p=>h(PostCard,{key:p.id,p}))))),
h(Cta))}
