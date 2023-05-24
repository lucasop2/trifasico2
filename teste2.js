// Função para multiplicar dois números complexos
function multiplicarComplexos(z1, z2) {
    const real = z1.real * z2.real - z1.imag * z2.imag;
    const imag = z1.real * z2.imag + z1.imag * z2.real;
    return {real, imag};
  }
  // Função para dividir dois números complexos
  function dividirComplexos(z1, z2) {
    const denominator = z2.real ** 2 + z2.imag ** 2;
    let real, imag;
  
    if (denominator !== 0) {
      real = (z1.real * z2.real + z1.imag * z2.imag) / denominator;
      imag = (z1.imag * z2.real - z1.real * z2.imag) / denominator;
    } else {
      // Tratamento especial caso o denominador seja zero
      real = 0;
      imag = 0;
    }
  
    return { real, imag };
  }
  
  
  
  function converterPolarParaRetangular(magnitude, angle) {
  const real = magnitude * Math.cos(angle * Math.PI / 180);
  const imag = magnitude * Math.sin(angle * Math.PI / 180);
  return { real, imag };
  }
  
  // Função para converter de forma retangular para forma polar
  function converterRetangularParaPolar(real, imag) {
    const magnitude = Math.sqrt(real * real + imag * imag);
    const angle = Math.atan2(imag, real) * 180 / Math.PI;
    return { magnitude, angle };
  }
  
  function somarComplexos(z1, z2) {
  return {
  real: z1.real + z2.real,
  imag: z1.imag + z2.imag
  };
  }
  
  function somarComplexos2(z1, z2,z3) {
  return {
  real: z1.real + z2.real + z3.real,
  imag: z1.imag + z2.imag+ z3.imag
  };
  }

  function subtrairComplexos(z1, z2) {
    return {
    real: z1.real - z2.real,
    imag: z1.imag - z2.imag
    };
    }
  
  function deslocamentopositivo(real,imag) {

    const a = converterRetangularParaPolar(real, imag);
    const des= 120+a.angle;
    const pol=converterPolarParaRetangular(a.magnitude,des.angle);
  
    return { real: pol.real, imag: pol.imag };
  }
  function deslocamentonegativo(real, imag) {
    const a = converterRetangularParaPolar(real, imag);
    const des =  a.angle-120;
    const pol = converterPolarParaRetangular(a.magnitude, des);
  
    return { real: pol.real, imag: pol.imag };
  }
  

 
  function inv(real, imag) {
    const a = converterRetangularParaPolar(real, imag);
    const invertedAngle = 0-a.angle;
    const za = converterPolarParaRetangular(a.magnitude, invertedAngle);
    return { real: za.real, imag: za.imag };
  }
  

  function VAB(real, imag) {

    const a = converterRetangularParaPolar(real, imag);
    const raizDeTres = Math.sqrt(3);
    const parteRealDividida = (a.magnitude * raizDeTres);
    const parteImaginariaDividida = (a.angle-30 );

    
    return {real: parteRealDividida, imag:parteImaginariaDividida };
  }
  
      function caso1(){

        const zalinhai1 = parseFloat(document.getElementById('zalinai').value);
        const zalinha1 = parseFloat(document.getElementById('zalinha').value);
        const zblinhai1 = parseFloat(document.getElementById('zblinhai').value);
        const zblinha1 = parseFloat(document.getElementById('zblinha').value);
        const zclinhai1 = parseFloat(document.getElementById('zclinhai').value);
        const zclinha1 = parseFloat(document.getElementById('zclinha').value);
        const zcarga1 = parseFloat(document.getElementById('zcarga').value);
        const zcargai1 = parseFloat(document.getElementById('zcargai').value);
        const vab1 = parseFloat(document.getElementById('vab').value);
        const vabi1 = parseFloat(document.getElementById('vabi').value);
        const aux=0;
        const aux2= somarComplexos({ real: 1, imag:0 }, { real: 0, imag:0 });
    
        let za=0,zb=0,zc=0,zcarga=0,vab=0,vbc=0,vca=0,ia=0,ib=0,ic=0;
      
        var fase = document.getElementById("fase");
        var polar = document.getElementById("polar");
        var triangulo = document.getElementById("triangulo");
        var caso3 = document.getElementById("caso3");
        var caso1 = document.getElementById("caso1");
        var fonte = document.getElementById("fontepol");
        var VAB = document.getElementById("VAB");
        var caso2 = document.getElementById("caso2");
        let vbc2,vca2,vab2;
        if (fonte.checked) {
         vab = converterPolarParaRetangular(vab1,vabi1);
         vab2 = converterPolarParaRetangular(vab1,vabi1);
         console.log ("vab", vab2);
        }
         else{
          vab = somarComplexos({ real: vab1, imag: vabi1 }, { real:aux , imag:aux });
          vab2= somarComplexos({ real: vab1, imag: vabi1 }, { real:aux , imag:aux });
        console.log ("vab", vab2);

         }

       



         if (VAB.checked) {
          const a = converterRetangularParaPolar(vab.real,vab.imag);
          console.log("VAN VAN VAN", a);
          const raizDeTres = Math.sqrt(3);
          const parteReal = a.magnitude / raizDeTres;
          const parteImaginaria = a.angle - 30; 
          console.log("VAN VAN VAN", parteReal);
          console.log("VAN VAN VAN", parteImaginaria);
          vab = converterPolarParaRetangular(parteReal, parteImaginaria);
          console.log("VAN VAN VAN", vab);}
          else {

            const a = converterRetangularParaPolar(vab2.real,vab2.imag);
            console.log("vab", a);
            const raizDeTres = Math.sqrt(3);
            const parteReal = a.magnitude * raizDeTres;
            const parteImaginaria = a.angle + 30; 
            console.log("vab real", parteReal);
            console.log("vab imag", parteImaginaria);
            vab2 = converterPolarParaRetangular(parteReal, parteImaginaria);
            console.log("vab", vab2);

          
        }
        
        if (fase.checked) {

          const A= somarComplexos({ real: -0.5, imag:-0.866025 }, { real: 0, imag:0 });
          
          vca= multiplicarComplexos(vab,A);
          vca2=multiplicarComplexos(vab2,A);
      
          vbc= dividirComplexos(vab,A);
           vbc2=dividirComplexos(vab2,A);

           const x=converterRetangularParaPolar(vca2.real,vca2.imag);
           const y=converterRetangularParaPolar(vbc2.real,vbc2.imag);
 
           console.log("vbc",x);
           console.log("vca",y);
        }
         else {

          const A= somarComplexos({ real: -0.5, imag:-0.866025 }, { real: 0, imag:0 });
          
          vbc= multiplicarComplexos(vab,A);
          vbc2=multiplicarComplexos(vab2,A);
        
        
          vca= dividirComplexos(vab,A);
          vca2=dividirComplexos(vab2,A);
          const x=converterRetangularParaPolar(vca2.real,vca2.imag);
          const y=converterRetangularParaPolar(vbc2.real,vbc2.imag);

          console.log("vbc",x);
          console.log("vca",y);

         }


          if (polar.checked) {
            za=converterPolarParaRetangular(zalinha1, zalinhai1);
            zb= converterPolarParaRetangular(zblinha1,zblinhai1);
            zc=converterPolarParaRetangular(zclinha1,zclinhai1);
             zcarga= converterPolarParaRetangular(zcarga1,zcargai1);
            vab = converterPolarParaRetangular(vab1,vabi1);}
              
             else {
            za = somarComplexos({ real: zalinha1, imag: zalinhai1 }, { real: aux, imag: aux });
           zb = somarComplexos({ real: zblinha1, imag: zblinhai1 }, { real: aux, imag: aux });
           zc = somarComplexos({ real: zclinha1, imag: zclinhai1 }, { real: aux, imag: aux });
           zcarga=somarComplexos({ real: zcarga1, imag: zcargai1 }, { real: aux, imag: aux });
          
          }


           if(triangulo.checked){
              const den5=multiplicarComplexos(za,zb);
              const den1=multiplicarComplexos(zb,zc);
              const den2=multiplicarComplexos(zc,za);
              const num= somarComplexos2(za,zb,zc);
                  zb = dividirComplexos(den5,num);
                  zc= dividirComplexos(den1,num);
                  za = dividirComplexos(den2,num);

                  console.log("teste teste teste",za);
                  console.log("teste teste teste",zb);
                  console.log("teste teste teste",zc);

          }

          za=somarComplexos(za,zcarga);
          zb=somarComplexos(zb,zcarga);
          zc=somarComplexos(zc,zcarga);

          console.log("za+zp",za);
          console.log("zb+zp",zb);
          console.log("zc+zp",zc);


          if (caso3.checked) {
            const yat=dividirComplexos(aux2,za);
            const ybt=dividirComplexos(aux2,zb);
            const yct=dividirComplexos(aux2,zc);
           

           const x=converterRetangularParaPolar(yat.real,yat.imag);
          const y=converterRetangularParaPolar(ybt.real,ybt.imag);


            const yat2= multiplicarComplexos(yat,vab);
            const ybt2= multiplicarComplexos(ybt,vbc);
            const yct2= multiplicarComplexos(yct,vca);

            const den= somarComplexos2(yat2,ybt2,yct2);
            const num=somarComplexos2(yat,ybt,yct);
           

            const vnn= dividirComplexos(den,num);

            const ia1=dividirComplexos(vab,za);
            const ia2=dividirComplexos(vnn,za);
            ia=subtrairComplexos(ia1,ia2);

            const ib1=dividirComplexos(vbc,zb);
            const ib2=dividirComplexos(vnn,zb);
            ib=subtrairComplexos(ib1,ib2);
            
            const ic1=dividirComplexos(vca,zc);
            const ic2=dividirComplexos(vnn,zc);
            ic=subtrairComplexos(ic1,ic2);


            console.log("vnn",vnn);
            const vnnret= converterRetangularParaPolar(vnn.real,vnn.imag);
            console.log("VNN RET",vnnret);
          }
           
          if(caso1.checked){
           ia = dividirComplexos(vab, za);
           ib = dividirComplexos(vbc, zb);
           ic = dividirComplexos(vca, zc);}

           if(caso2.checked){
            const zn = parseFloat(document.getElementById('zn').value);
            const zni = parseFloat(document.getElementById('zni').value);

            const a=dividirComplexos(vab,za);
            const b=dividirComplexos(vbc,zb);
            const c=dividirComplexos(vca,zc);
            
            const num=somarComplexos2(a,b,c);

            const zna=dividirComplexos({real:zn,imag:zni},za);
            const znb=dividirComplexos({real:zn,imag:zni},zb);
            const znc=dividirComplexos({real:zn,imag:zni},zc);
          
             const soma=somarComplexos2(zna,znb,znc);
             const dem=somarComplexos(soma,aux2);
             const in1=dividirComplexos(num,dem);

             const suba=multiplicarComplexos(zna,in1);
             const subb=multiplicarComplexos(znb,in1);
             const subc=multiplicarComplexos(znc,in1);

             ia=subtrairComplexos(a,suba);
             ib=subtrairComplexos(b,subb);
             ic=subtrairComplexos(c,subc);
          
          }
      
          //tençao de fase
          const vcargaA = multiplicarComplexos({ real: zalinha1, imag: zalinhai1 }, ia);
          const vcargab = multiplicarComplexos({ real: zblinha1, imag: zblinhai1 }, ib);
          const vcargac = multiplicarComplexos({ real: zclinha1, imag: zclinhai1 }, ic);

           //tençao de linha
           const VAN = subtrairComplexos(vcargaA,vcargab);
           const VBN = subtrairComplexos(vcargab,vcargac);
           const VCN = subtrairComplexos(vcargaA,vcargac);
 

          const neutro = somarComplexos2(ia, ib, ic);

          //corente de linha 
          const iab=somarComplexos(ia,ib);
          const ibc=somarComplexos(ib,ic);
          const ica=somarComplexos(ic,ia);

          const invrtA=inv(ia.real,ia.imag);
          const invrtB=inv(ib.real,ib.imag);
          const invrtC=inv(ic.real,ic.imag);

           //potencia da fonte
          const pota2=multiplicarComplexos(multiplicarComplexos(invrtA,za),ia);
          const potb2=multiplicarComplexos(multiplicarComplexos(invrtB,zb),ib);
          const potc2=multiplicarComplexos(multiplicarComplexos(invrtC,zc),ic);

      
              //pottencia 
              za=subtrairComplexos(za,zcarga);
              zb=subtrairComplexos(zb,zcarga);
              zc=subtrairComplexos(zc,zcarga);

              
              const pota=multiplicarComplexos(multiplicarComplexos(invrtA,za),ia);
              const potb=multiplicarComplexos(multiplicarComplexos(invrtB,zb),ib);
              const potc=multiplicarComplexos(multiplicarComplexos(invrtC,zc),ic);




          const iaret = converterRetangularParaPolar(ia.real, ia.imag);
          const ibret = converterRetangularParaPolar(ib.real, ib.imag);
          const icret = converterRetangularParaPolar(ic.real, ic.imag);
          const vanret = converterRetangularParaPolar(VAN.real, VAN.imag);
          const vbnret = converterRetangularParaPolar(VBN.real, VBN.imag);
          const vcnret = converterRetangularParaPolar(VCN.real, VCN.imag);
          const vcargaAret = converterRetangularParaPolar(vcargaA.real, vcargaA.imag);
          const vcargabret = converterRetangularParaPolar(vcargab.real, vcargab.imag);
          const vcargacret = converterRetangularParaPolar(vcargac.real, vcargac.imag);
          const neutroret = converterRetangularParaPolar(neutro.real, neutro.imag);
          const potaret = converterRetangularParaPolar(pota.real, pota.imag);
          const potbret = converterRetangularParaPolar(potb.real, potb.imag);
          const potcret = converterRetangularParaPolar(potc.real, potc.imag);
          const iabaret = converterRetangularParaPolar(iab.real, iab.imag);
          const ibcbret = converterRetangularParaPolar(ibc.real, ibc.imag);
          const icacret = converterRetangularParaPolar(ica.real, ica.imag);

          const pota2ret = converterRetangularParaPolar(pota2.real, pota2.imag);
          const potb2ret = converterRetangularParaPolar(potb2.real, potb2.imag);
          const potc2ret = converterRetangularParaPolar(potc2.real, potc2.imag);

          
        

          console.log("tençao de linha VAB RET:", vanret);
          console.log("tençao de linha VCB RET", vbnret);
          console.log("tençao de linha VCA RET:", vcnret);
          console.log("tençao de fase VA ret:", vcargaAret);
          console.log("tençao de fase VB ret:", vcargabret);
          console.log("tençao de fase VA ret:", vcargacret);
          console.log("neutro", neutroret);
          console.log("potencia A",potaret);
          console.log("potencia B",potbret);
          console.log("potencia C",potcret);

          console.log("potencia A2",pota2ret);
          console.log("potencia B2",potb2ret);
          console.log("potencia C2",potc2ret);

          document.getElementById("ia").innerText = "corrente a: " + iaret.magnitude.toFixed(3)+" <"+iaret.angle.toFixed(3);
          document.getElementById("ib").innerText = "corrente b: " + ibret.magnitude.toFixed(3)+" <"+ibret.angle.toFixed(3);
          document.getElementById("ic").innerText = "corrente c: "+ icret.magnitude.toFixed(3)+" <"+icret.angle.toFixed(3);

          document.getElementById("iap").innerText = "corrente a: " + ia.real.toFixed(3)+"  j"+ia.real.toFixed(3);
          document.getElementById("ibp").innerText = "corrente b: " + ib.real.toFixed(3)+"  j"+ib.real.toFixed(3);
          document.getElementById("icp").innerText = "corrente c: "+ ic.real.toFixed(3)+"  j"+ic.real.toFixed(3);

          document.getElementById("linhaa").innerText = "tenção de linha vab: " + vanret.magnitude.toFixed(3)+" <"+vcnret.angle.toFixed(3);
          document.getElementById("linhab").innerText = "tenção de linha vbc: " + vbnret.magnitude.toFixed(3)+" <"+vcnret.angle.toFixed(3);
          document.getElementById("linhac").innerText = "tenção de linha vca: "+ vcnret.magnitude.toFixed(3)+" <"+vcnret.angle.toFixed(3);

          document.getElementById("linhaap").innerText = "tenção de linha vab: " + VAN.real.toFixed(3)+"  j"+VAN.real.toFixed(3);
          document.getElementById("linhabp").innerText = "tenção de linha vbc: " + VBN.real.toFixed(3)+"  j"+VAN.real.toFixed(3);
          document.getElementById("linhacp").innerText = "tençao de linha vca: "+ VCN.real.toFixed(3)+"  j"+VCN.real.toFixed(3);

          document.getElementById("fasea").innerText = "tenção de fase vab: " + vcargaAret.magnitude.toFixed(3)+" <"+vcargaAret.angle.toFixed(3);
          document.getElementById("faseb").innerText = "tenção de fase vbc: " + vcargabret.magnitude.toFixed(3)+" <"+vcargabret.angle.toFixed(3);
          document.getElementById("fasec").innerText = "tenção de fase vca: "+ vcargacret.magnitude.toFixed(3)+" <"+vcargacret.angle.toFixed(3);

          document.getElementById("faseap").innerText = "tenção de fase va: " + vcargaA.real.toFixed(3)+"  j"+vcargaA.real.toFixed(3);
          document.getElementById("fasebp").innerText = "tenção de fase vb: " + vcargab.real.toFixed(3)+"  j"+vcargab.real.toFixed(3);
          document.getElementById("fasecp").innerText = "tençao de fase vc: "+ vcargac.real.toFixed(3)+"  j"+vcargac.real.toFixed(3);

          document.getElementById("pofa").innerText = "potencia da carga A: " + potaret.magnitude.toFixed(3)+" <"+potaret.angle.toFixed(3);
          document.getElementById("pofb").innerText = "potencia da carga B: " + potbret.magnitude.toFixed(3)+" <"+potbret.angle.toFixed(3);
          document.getElementById("pofc").innerText = "potencia da carga C: "+ potcret.magnitude.toFixed(3)+" <"+potcret.angle.toFixed(3);

          document.getElementById("pofap").innerText = "potencia da garga A: " + pota.real.toFixed(3)+" j"+pota.imag.toFixed(3);
          document.getElementById("pofbp").innerText = "potencia da garga B: " + potb.real.toFixed(3)+" j"+potb.imag.toFixed(3);
          document.getElementById("pofcp").innerText = "potencia da carga C: "+ potc.real.toFixed(3)+" j"+potc.imag.toFixed(3);

          document.getElementById("pofa2").innerText = "potencia da fonte A: " + pota2ret.magnitude.toFixed(3)+" <"+pota2ret.angle.toFixed(3);
          document.getElementById("pofb2").innerText = "potencia da fonte B: " + potb2ret.magnitude.toFixed(3)+" <"+potb2ret.angle.toFixed(3);
          document.getElementById("pofc2").innerText = "potencia da fonte C: "+ potc2ret.magnitude.toFixed(3)+" <"+potc2ret.angle.toFixed(3);

          document.getElementById("pofap2").innerText = "potencia da fonte A: " + pota2.real.toFixed(3)+" j"+pota2.imag.toFixed(3);
          document.getElementById("pofbp2").innerText = "potencia da fonte B: " + potb2.real.toFixed(3)+" j"+potb2.imag.toFixed(3);
          document.getElementById("pofcp2").innerText = "potencia da fonte C: "+ potc2.real.toFixed(3)+" j"+potc2.imag.toFixed(3);
        }


       
