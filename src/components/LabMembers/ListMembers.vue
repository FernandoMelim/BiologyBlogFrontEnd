<template>
  <div class="lab-members">
    <Member v-for="member in members" :key="member.name" :member="member" class="member" :image="member.image"/>
  </div>
</template>

<script>
import Member from '@/components/LabMembers/Member.vue'

export default {
  components: { Member },
  data () {
    return {
      members: [{
        name: 'KARINA BORTOLUCI',
        role: 'Principal Investigator',
        studies: 'Associate Professor at Federal University of São Paulo. CNPq Pq1c Investigator',
        biography: 'Mum of 2 kids and 3 cats. Science, yoga, nature, kids, and cats crazy lover Karina is an expert in Innate Immunity.  Her scientific contributions include the demonstration of the role of NLRP3 to the control of T. cruzi infection by macrophages (doi.org/10.1371/journal.pntd.0002469) and by glial cells from CNS (https://doi.org/10.1002/JLB.4AB1118-416RR) and the description of non-conventional effector mechanisms mediated by inflammasomes to control infections such as iNOS activation (doi.org/10.1074/jbc.M110.124297), epigenetic regulation of inflammatory genes (doi.org/10.1038/srep41686), a cathepsin-mediated process of cell death (doi.org/10.1073/pnas.1305316110) and autophagy (https://doi.org/10.1002/JLB.HI1118-461R). Her lab is currently focused on the study of molecular pathways involved in the activation of inflammasomes and their impact on the control of infections. Karina is also a Hatha Vinyasa and Multidimensional Vinyasa Yoga teacher (400 YTT), and she is the creator of the #yogacomciencia #Project.',
        socialMedia: {
          facebook: 'https://www.facebook.com/karina.bortoluci',
          twitter: 'https://twitter.com/KarinaBortoluci',
          linkedin: 'https://br.linkedin.com/in/karina-bortoluci-a24342117',
          orcid: 'https://orcid.org/0000-0001-6780-5397',
          researchgate: 'https://www.researchgate.net/profile/Karina_Bortoluci',
          lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4790343Y6'
        },
        image: '../../assets/images/LabMemberImages/karina.webp'
      },
      {
        name: 'MARCELO AMARAL',
        role: 'Ph.D. Student',
        studies: 'Role of NAIP/NLRC4 inflammasomes in controlling protozoan infections',
        biography: 'Loves science, immunology, microorganisms, innovation, teaching, nature, coffee, chocolate, flavors, and aromas. Marcelo graduated in Biological Sciences (2015) and also obtained his Master of Science title in Microbiology and Immunology (2018), both at the Federal University of São Paulo (UNIFESP) - Brazil. He is at present a Ph.D. student in the Microbiology, Immunology and Parasitology Department at UNIFESP. He is currently developing his research investigating the role of inflammasome proteins after protozoa parasites infection.',
        socialMedia: {
          facebook: 'https://www.facebook.com/marcelo.amaral21',
          twitter: 'https://twitter.com/mpiresamaral',
          linkedin: '',
          orcid: 'https://orcid.org/0000-0002-5335-6196',
          researchgate: 'https://www.researchgate.net/profile/Marcelo_Pires_Amaral',
          lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8168033H0'
        },
        image: '../../assets/images/LabMemberImages/marcelo.webp'
      },
      {
        name: 'LUIZA ZAINOTTI',
        role: 'Master Student',
        studies: 'Role of pyroptosis in the control of  protozoan infections',
        biography: "Loves science, pets, poetry, music and coffee. Luiza is a biologist graduated at the Federal University of São Paulo (UNIFESP) in which she studied the modulation of inflammasomes mediated by extracellular vesicles derived from head and neck squamous carcinoma cells during her undergraduate research. Currently she is a master's student in the Immunology Program at the University of São Paulo (USP) and her main interest is to evaluate the effect of pyroptotic cell death in the control of infection by protozoa parasites in different cell types.",
        socialMedia: {
          facebook: '',
          twitter: '',
          linkedin: 'https://www.linkedin.com/in/luizazainotti/',
          orcid: 'https://orcid.org/0000-0003-0373-7019',
          researchgate: '',
          lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8089190H6'
        },
        image: '../../assets/images/LabMemberImages/luiza.webp'
      }
      ]
    }
  }
}
</script>

<style scoped>

.lab-members {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.member {
    border: 0px solid black;
    border-radius: 0px;
    margin: 2% 5%;
    width: 40%;
    height: auto;
    background-color: rgb(230, 229, 225);
}

</style>
