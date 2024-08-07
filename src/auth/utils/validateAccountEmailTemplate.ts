export const emailMessage = (orderId: string, username: string, phone: { code: string; value: string }) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {
          width: 600px;
          margin: 0 auto;
        }
        table {
          border-collapse: collapse;
        }
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
      </style>
    <![endif]-->
    <style type="text/css">
      body,
      p,
      div {
        font-family: inherit;
        font-size: 14px;
      }

      body {
        color: #000000;
      }

      body a {
        color: #1188e6;
        text-decoration: none;
      }

      p {
        margin: 0;
        padding: 0;
      }

      table.wrapper {
        width: 100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      img.max-width {
        max-width: 100% !important;
      }

      .column.of-2 {
        width: 50%;
      }

      .column.of-3 {
        width: 33.333%;
      }

      .column.of-4 {
        width: 25%;
      }

      ul ul ul ul {
        list-style-type: disc !important;
      }

      ol ol {
        list-style-type: lower-roman !important;
      }

      ol ol ol {
        list-style-type: lower-latin !important;
      }

      ol ol ol ol {
        list-style-type: decimal !important;
      }

      @media screen and (max-width: 480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
          text-align: left !important;
        }

        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }

        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }

        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }

        img.max-width {
          height: auto !important;
          max-width: 100% !important;
        }

        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        .columns {
          width: 100% !important;
        }

        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .social-icon-column {
          display: inline-block !important;
        }
      }
    </style>
    <!--user entered Head Start-->
    <link href="https://fonts.googleapis.com/css?family=Chivo&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet" />
    <style>
      body {
        font-family: 'Chivo', sans-serif;
      }
    </style>
    <!--End Head user entered-->
  </head>

  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
          <tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
      <center>
      <table><tr><td width="600">
    <![endif]-->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px" align="center">
                            <tr>
                              <td role="modules-container" style="padding: 0px 0px 0px 0px; color: #000000; text-align: left" bgcolor="#FFFFFF" width="100%" align="left">
                                <table
                                  class="module preheader preheader-hide"
                                  role="module"
                                  data-type="preheader"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0"
                                >
                                  <tr>
                                    <td role="module-content">
                                      <p></p>
                                    </td>
                                  </tr>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding: 0px 0px 0px 0px" bgcolor="#FFFFFF" data-distribution="1">
                                  <tbody>
                                    <tr role="module-content">
                                      <td height="100%" valign="top">
                                        <table width="600" style="width: 600px; border-spacing: 0; border-collapse: collapse; margin: 0px 0px 0px 0px" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                          <tbody>
                                            <tr>
                                              <td style="padding: 0px; margin: 0px; border-spacing: 0">
                                                <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="00cedc83-bd19-445a-9c66-2bb531df0ee8">
                                                  <tbody>
                                                    <tr>
                                                      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="0439ab5b-e48d-4678-b644-de6e5a115565">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 0px 0px 0px 0px" role="module-content" height="100%" valign="top" bgcolor="">
                                                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="7px" style="line-height: 7px; font-size: 7px">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding: 0px 0px 7px 0px" bgcolor="#ffffff"></td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding: 30px 0px 30px 30px" bgcolor="#e7f2e4" data-distribution="1">
                                  <tbody>
                                    <tr role="module-content">
                                      <td height="100%" valign="top">
                                        <table width="570" style="width: 570px; border-spacing: 0; border-collapse: collapse; margin: 0px 0px 0px 0px" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                          <tbody>
                                            <tr>
                                              <td style="padding: 0px; margin: 0px; border-spacing: 0">
                                                <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="33d39ee4-da50-404a-8d62-ac83a12a2429">
                                                  <tbody>
                                                    <tr>
                                                      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px; display: flex; flex-direction: row; align-items: center" valign="top" align="left">
                                                        <img class="max-width" border="0" width="50" alt="" data-proportionally-constrained="true" data-responsive="false" src="https://olademar.store/assets/marlogo-BFLRVOvM.png" height="50" />
                                                        <h2 style="display: block; color: #000000; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 38px; font-weight: 500; margin-left: 20px">Hola, OLA DE MAR:</h2>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding: 50px 0px 0px 30px" bgcolor="#964f2f" data-distribution="1">
                                  <tbody>
                                    <tr role="module-content">
                                      <td height="100%" valign="top">
                                        <table width="550" style="width: 550px; border-spacing: 0; border-collapse: collapse; margin: 0px 10px 0px 10px" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
                                          <tbody>
                                            <tr>
                                              <td style="padding: 0px; margin: 0px; border-spacing: 0">
                                                <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="550f2fb7-70c1-463b-9758-84b6d731ca56">
                                                  <tbody>
                                                    <tr>
                                                      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="left"></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="d8a6da06-629b-4b1f-a750-84744e679927">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 0px 0px 20px 0px" role="module-content" bgcolor=""></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table
                                                  class="module"
                                                  role="module"
                                                  data-type="text"
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  width="100%"
                                                  style="table-layout: fixed"
                                                  data-muid="b16a4afb-f245-4156-968e-8080176990ea"
                                                  data-mc-module-version="2019-10-22"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 18px 40px 0px 0px; line-height: 22px; text-align: inherit" height="100%" valign="top" bgcolor="" role="module-content">
                                                        <div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 24px; font-weight: 500">TIENES UN PEDIDO POR CONFIRMAR</span>
                                                          </div>
                                                          <div></div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table
                                                  class="module"
                                                  role="module"
                                                  data-type="text"
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  width="100%"
                                                  style="table-layout: fixed"
                                                  data-muid="b16a4afb-f245-4156-968e-8080176990ea.1"
                                                  data-mc-module-version="2019-10-22"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 18px 40px 10px 0px; line-height: 18px; text-align: inherit" height="100%" valign="top" bgcolor="" role="module-content">
                                                        <div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 100"
                                                              ><strong>Hola Marji, el usuario ${username} hizo un pedido mediante OLADEMAR.STORE y espera la confirmación.</strong></span
                                                            >
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit; margin-top: 10px">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 100"><strong>ID DEL PEDIDO: #${orderId}</strong></span>
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit; margin-top: 10px">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 100"><strong>NOMBRE DEL USUARIO: ${username}</strong></span>
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit; margin-top: 10px">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 100"
                                                              ><strong>NÚMERO DE CONTACTO: ${phone.code} ${phone.value}</strong></span
                                                            >
                                                          </div>
                                                          <div></div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 0px 0px 10px 0px" role="module-content" bgcolor=""></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="module"
                                                  data-role="module-button"
                                                  data-type="button"
                                                  role="module"
                                                  style="table-layout: fixed"
                                                  width="100%"
                                                  data-muid="9c7ac938-a540-4353-9fec-543b193bf7da"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td align="left" bgcolor="" class="outer-td" style="padding: 0px 0px 0px 0px">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align: center">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center" bgcolor="#fbca5b" class="inner-td" style="border-radius: 6px; font-size: 16px; text-align: left; background-color: inherit">
                                                                <div
                                                                  style="
                                                                    background-color: #fbca5b;
                                                                    border: 1px solid #fbca5b;
                                                                    border-color: #fbca5b;
                                                                    border-radius: 0px;
                                                                    border-width: 1px;
                                                                    color: #000000;
                                                                    display: inline-block;
                                                                    font-size: 14px;
                                                                    font-weight: normal;
                                                                    letter-spacing: 0px;
                                                                    line-height: normal;
                                                                    padding: 12px 50px 12px 50px;
                                                                    text-align: center;
                                                                    text-decoration: none;
                                                                    border-style: solid;
                                                                    font-family: inherit;
                                                                    cursor: pointer;
                                                                  "
                                                                  target="_blank"
                                                                >
                                                                  Pronto podrás hacerlo automáticamente desde aquí :'D
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f.1">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 0px 0px 60px 0px" role="module-content" bgcolor=""></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table
                                                  class="module"
                                                  role="module"
                                                  data-type="text"
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  width="100%"
                                                  style="table-layout: fixed"
                                                  data-muid="b16a4afb-f245-4156-968e-8080176990ea.1.1"
                                                  data-mc-module-version="2019-10-22"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 18px 40px 10px 0px; line-height: 18px; text-align: inherit" height="100%" valign="top" bgcolor="" role="module-content">
                                                        <div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 200"
                                                              >Si ha presentado problemas con la confirmación del pedido u otros, comunícate conmigo INMEDIATAMENTE para que pueda proteger y solucionar su inconveniente.</span
                                                            >
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 200"><br /> </span>
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 200">Llámame al +51 962188082</span>
                                                          </div>
                                                          <div style="font-family: inherit; text-align: inherit">
                                                            <span style="color: white; text-decoration: none; font-family: 'Kumbh Sans', sans-serif; font-size: 14px; font-weight: 200"
                                                              >O envíame un correo electrónico a miguelenrique1805@gmail.com</span
                                                            >
                                                          </div>
                                                          <div></div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f.1.1">
                                                  <tbody>
                                                    <tr>
                                                      <td style="padding: 0px 0px 80px 0px" role="module-content" bgcolor=""></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="38ec2680-c847-4765-8c5f-aa2aba19a2b3">
                                  <tbody>
                                    <tr>
                                      <td style="padding: 0px 0px 0px 0px" role="module-content" height="100%" valign="top" bgcolor="">
                                        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="7px" style="line-height: 7px; font-size: 7px">
                                          <tbody>
                                            <tr>
                                              <td style="padding: 0px 0px 7px 0px" bgcolor="#ffffff"></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed" data-muid="7a8a420f-bc0f-4307-bd09-412a5ff00998">
                                  <tbody>
                                    <tr>
                                      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center">
                                        <img
                                          class="max-width"
                                          border="0"
                                          style="display: block; color: #000000; text-decoration: none; font-family: Helvetica, arial, sans-serif; font-size: 16px; max-width: 100% !important; width: 100%; height: auto !important"
                                          width="600"
                                          alt=""
                                          data-proportionally-constrained="true"
                                          data-responsive="true"
                                          src="http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/93a17c3c-cf4b-40a6-9cae-ff0c223945a4/600x56.png"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div
                                  data-role="module-unsubscribe"
                                  class="module"
                                  role="module"
                                  data-type="unsubscribe"
                                  style="color: #444444; font-size: 12px; line-height: 20px; padding: 16px 16px 16px 16px; text-align: Center"
                                  data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"
                                >
                                  <div class="Unsubscribe--addressLine">
                                    <p class="Unsubscribe--senderName" style="font-size: 12px; line-height: 20px">{{miguelenrique1805@gmail.com}}</p>
                                    <p style="font-size: 12px; line-height: 20px">
                                      <span class="Unsubscribe--senderAddress">{{PERÚ}}</span>, <span class="Unsubscribe--senderCity">{{CUSCO}}</span>, <span class="Unsubscribe--senderState">{{CUSCO}}</span>
                                      <span class="Unsubscribe--senderZip">{{08001}}</span>
                                    </p>
                                  </div>
                                  <p style="font-size: 12px; line-height: 20px">
                                    <a class="Unsubscribe--unsubscribeLink" href="https://olademar.store" target="_blank">OLA DE MAR</a> -
                                    <a href="https://olademar.store" target="_blank" class="Unsubscribe--unsubscribePreferences">OLADEMAR.STORE</a>
                                  </p>
                                </div>
                                <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout: fixed" width="100%" data-muid="840a78da-be53-493f-8903-70244289fe77">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="" class="outer-td" style="padding: 0px 0px 20px 0px">
                                        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align: center">
                                          <tbody>
                                            <tr>
                                              <td align="center" bgcolor="#f5f8fd" class="inner-td" style="border-radius: 6px; font-size: 16px; text-align: center; background-color: inherit">
                                                <a
                                                  href="https://sendgrid.com/"
                                                  style="
                                                    background-color: #f5f8fd;
                                                    border: 1px solid #f5f8fd;
                                                    border-color: #f5f8fd;
                                                    border-radius: 25px;
                                                    border-width: 1px;
                                                    color: #a8b9d5;
                                                    display: inline-block;
                                                    font-size: 10px;
                                                    font-weight: normal;
                                                    letter-spacing: 0px;
                                                    line-height: normal;
                                                    padding: 5px 18px 5px 18px;
                                                    text-align: center;
                                                    text-decoration: none;
                                                    border-style: solid;
                                                    font-family: helvetica, sans-serif;
                                                  "
                                                  target="_blank"
                                                  >♥ IMPULSADO POR MIKE-CODE1805</a
                                                >
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]>
                                    </td>
                                  </tr>
                                </table>
                              </center>
                              <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>

`;
};
