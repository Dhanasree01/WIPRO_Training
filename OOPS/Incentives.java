public interface  Incentives
{
     
     abstract void diwaliBonus(); // but this bonus will be different as per their role

}


class Manager implements Incentives{
 
 public void diwaliBonus()
    {
        //logic
    }
}

class SE implements Incentives
{

   public void diwaliBonus()
    {
        // logic
    }

}

//Write a program for bankaccount to know the balance after depositing and withdrawing the amount 
// and also having the loan account facilitiy to calculate the emi and monthly emi's will be
//paid by customer using either by card or cash