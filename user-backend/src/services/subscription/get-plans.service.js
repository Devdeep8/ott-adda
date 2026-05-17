import BaseService from '../../lib/base.service.js'

export class getActivePlans extends BaseService {
  async run (){

    const plans = await this.db.subscriptionPlan.findMany({
      where: { isActive: true },
      orderBy: { priceInPaise: 'asc' },
    })
    return plans
  }
}

export default getActivePlans