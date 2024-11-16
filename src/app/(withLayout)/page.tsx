import ApproachtoCreative from "@/Components/ApproachtoCreative/ApproachtoCreative";
import Banner from "@/Components/Banner/Banner";
import Clients from "@/Components/Clients/Clients";
import CreativeService from "@/Components/Creative-service/CreativeService";
import EffortlessSolution from "@/Components/EffortlessSolution/EffortlessSolution";
import FreqentlyQus from "@/Components/FreqentlyQus/FreqentlyQus";
import OurPartner from "@/Components/OurPartner/OurPartner";
import Service from "@/Components/Service/Service";
import SocialMedicaSuccess from "@/Components/SocialMedicaSuccess/SocialMedicaSuccess";
import WhyChoice from "@/Components/WhyChoice/WhyChoice";

export default function Page() {
    return (
        <section className="container bg-gray-100" >
            <Banner></Banner>
            <Clients></Clients>
            <CreativeService></CreativeService>
            <Service></Service>
            <SocialMedicaSuccess></SocialMedicaSuccess>
            <OurPartner></OurPartner>
            <WhyChoice></WhyChoice>
            <EffortlessSolution></EffortlessSolution>
            <ApproachtoCreative></ApproachtoCreative>
            <FreqentlyQus></FreqentlyQus>
        </section>
    );
}