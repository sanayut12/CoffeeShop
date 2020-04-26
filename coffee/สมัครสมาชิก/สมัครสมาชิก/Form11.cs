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
    public partial class Form11 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form11()
        {
            InitializeComponent();
        }

        private void chart_menu_Click(object sender, EventArgs e)
        {

        }

        private void Form11_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string yy = comboBox_yy.Text;
            string mm = comboBox_mm.Text;
            string dd = comboBox_dd.Text;


            string QueryTheBaseSelling = "SELECT ProductName ,SUM(Price) as num FROM sales NATURAL JOIN sale_details WHERE sales.SaleDateTime LIKE '"+yy+"/"+mm+"/"+dd+"%' GROUP BY ProductName";
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

                chart_sell.Series.Add(ProName + " Cost = " + num);
                chart_sell.Series[ProName + " Cost = " + num].Points.AddXY(ProName, num);
            }
            connection.Close();
        }
    }
}
