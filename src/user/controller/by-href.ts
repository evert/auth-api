import Controller from '@curveball/controller';
import { Context } from '@curveball/core';
import * as privilegeService from '../../privilege/service';
import * as hal from '../formats/hal';
import * as userService from '../service';

class UserByHrefController extends Controller {

  async get(ctx: Context) {

    const user = await userService.findByHref(ctx.params.href);

    let hasControl = false;
    if (ctx.state.user.id === user.id) {
      hasControl = true;
    } else if (await privilegeService.hasPrivilege(ctx, 'admin')) {
      hasControl = true;
    }

    ctx.response.body = hal.item(
      user,
      await privilegeService.getPrivilegesForUser(user),
      hasControl,
    );

  }

}

export default new UserByHrefController();