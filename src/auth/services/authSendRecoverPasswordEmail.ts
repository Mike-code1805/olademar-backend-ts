// import { sendEmailServiceNodeMailer } from '../../shared/services/sendEmailServiceNodeMailer';
// import { sendEmailServiceSendGrid } from '../../shared/services/senEmailServiceSendGrid';
// import { UserId } from '../../users/entity/types/User';
// import { createAuthToken } from '../utils/tokenManager';

import { createAuthToken } from "../utils/tokenManager";
import { UserId } from "../../user/entity/types/User";
import { sendEmailServiceNodeMailer } from "../../shared/services/sendEmailNodemailerService";
import { emailMessage } from "../utils/validateAccountEmailTemplate";

export const authSendRecoverPasswordEmail = async (
  userId: UserId,
  email: string,
  password: string  
): Promise<void> => {
  const validateToken = createAuthToken({ id: userId }, password);
  const link = `${process.env.EMAIL_VALIDATE_URL}/recovery/${userId}/${validateToken}`;
  try {
    await sendEmailServiceNodeMailer(email, 'recovery password', emailMessage(link));
  } catch (e) {
    console.log(e);
  }
};