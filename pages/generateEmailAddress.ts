import { test, expect } from '@playwright/test';
import MailosaurClient from 'mailosaur';
const mailosaur = new MailosaurClient('VTR9uWzKiWMfT2o5');

    const mailosaurServerId = 'ppd12m2o';
    const mailosaurServerDomain = `${mailosaurServerId}.mailosaur.net`;
    const randomString = (Math.random() + 1).toString(36).substring(7);
    export const testEmailAddress = () => {
      const testEmail=`${randomString}@${mailosaurServerDomain}`
      return testEmail ;
    }
