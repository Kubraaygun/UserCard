import "./Header.css";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import InfoBox from "./../InfoBox/InfoBox";
import Modal from "./../Modal/Modal";

const Header = ({ aktifKullaniciSayisi, setAktifKullanici }) => {
  const [basilanButon, setBasilanButon] = useState(null);

  const [modalGoster, setModalGoster] = useState();

  const menuIsimleri = ["Anasayfa", "Hakkımızda", "Ürünlerimiz", "İletişim"];

  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar">
        {menuIsimleri.map((menuIsmi) => (
          <a>{menuIsmi}</a>
        ))}
      </nav>

      <div className="header-right">
        {basilanButon ? (
          <CustomButton
            buttonTitle={`${basilanButon}  Cikis yap`}
            buttonColor={" orangered"}
            onClick={() => {
              if (basilanButon === "Kullanici") {
                setAktifKullanici(aktifKullaniciSayisi - 1);
              }

              setBasilanButon(null);
            }}
          />
        ) : (
          <>
            <CustomButton
              onClick={() => {
                setAktifKullanici(aktifKullaniciSayisi + 1);
                setBasilanButon("Kullanici");
              }}
              buttonTitle={"Kullanıcı Girişi"}
              buttonColor={"cadetblue"}
            />
            <CustomButton
              onClick={() => {
                setBasilanButon("Yonetici");
              }}
              buttonTitle={"Yönetici Girişi"}
              buttonColor={"orange"}
            />
            <CustomButton
              onClick={() => setModalGoster(true)}
              buttonTitle={"Kayıt Ol"}
              buttonColor={"green"}
            />
          </>
        )}
        {/* basilanButon iceriginde Yonetici Varsa   */}
        {basilanButon === "Yonetici" && (
          <InfoBox
            infoMetin={"Aktif Kullanici Sayisi"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}

        {basilanButon === "Kullanici" && (
          <InfoBox
            infoMetin={"Sizinle Birlikte Kullanici Sayisi"}
            infoDeger={aktifKullaniciSayisi}
          />
        )}
      </div>

      {modalGoster === true && <Modal setModalGoster={setModalGoster} />}
    </header>
  );
};

export { Header };
