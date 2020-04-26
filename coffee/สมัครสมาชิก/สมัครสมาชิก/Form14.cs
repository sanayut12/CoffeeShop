using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace สมัครสมาชิก
{
    public partial class Form14 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form14()
        {
            InitializeComponent();
        }

        private void Form14_Load(object sender, EventArgs e)
        {
            string QueryTheBaseSelling = "SELECT ProductName,COUNT(ProductName) as num FROM sale_details GROUP BY ProductName";
            connection.Open();
            command = new MySqlCommand(QueryTheBaseSelling, connection);
            MySqlDataReader reader = command.ExecuteReader();
            string ProName;
            int num;
            while (reader.Read())
            {
                ProName = reader.GetString("ProductName");
                num = int.Parse(reader.GetString("num"));

                /*chart_menu.Series["Seller"].Points.AddXY(ProName,num);*/

                chart_menu.Series.Add(ProName + " quantity = " + num);
                chart_menu.Series[ProName + " quantity = " + num].Points.AddXY(ProName,num);
            }
            connection.Close();



            /*chartSalary.Series["Salary"].Points.AddXY("A", 3000);*/
        }
    }
}
