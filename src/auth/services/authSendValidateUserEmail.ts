import { UserId } from '../../user/entity/types/User';
import { logger } from '../../logger/appLoger';
import { createAuthToken } from '../utils/tokenManager';
import { sendEmailServiceSendGrid } from '../../shared/services/sendEmailSendGridService';
import { emailMessage } from '../utils/validateAccountEmailTemplate';
import { sendEmailServiceNodeMailer } from '../../shared/services/sendEmailNodemailerService';

export const authSendValidateUserEmail = async (
  userId: UserId,
  email: string, 
  password: string
): Promise<unknown> => {
  const validateToken = createAuthToken({ id: userId }, password);
  const link = `${process.env.EMAIL_VALIDATE_URL}/validate/${userId}/${validateToken}`;
  try {
    return await sendEmailServiceNodeMailer(email, 'email validation', emailMessage(link, link, {code: link, value: link}));
  } catch (error: any) {
    logger.error('Error sending user email validation', {
      instance: 'services',
      fn: 'authSendValidateUserEmail',
      trace: error.message,
    });
    throw new Error('Error sending user email validation');
  }
};
