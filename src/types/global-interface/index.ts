export interface ProductInterface{
      product_id: string,
      product_name: string,
      category_id: string,
      description: string,
      made_in: string,
      color: string,
      size: number,
      count: number,
      cost: number,
      discount: number,
      age_min: number,
      age_max: number,
      for_gender: string,
      image_url: string[],
}

export interface initialValuesLogin {
      email: string;
      password: string;
}


export interface initialValuesRegister extends initialValuesLogin {
      first_name: string;
      last_name: string;
      gender: string;
}