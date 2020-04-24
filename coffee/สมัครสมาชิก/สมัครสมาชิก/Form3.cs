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
    public partial class Form3 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form3()
        {
            InitializeComponent();
            AddColunm();
        }
        private void AddColunm()
        {
            listView_bill.View = View.Details;
            listView_bill.Columns.Add("BillCode", 100);
            listView_bill.Columns.Add("Customer", 350);
            listView_bill.Columns.Add("DateTime", 350);
            listView_bill.Columns.Add("Cost Total", 100);
            listView_bill.Columns.Add("Table", 100);
        }
        private void AddData(string billcode, string customer, string datetime, string cost, string table)
        {
            string[] item = { billcode,customer,datetime, cost, table };
            ListViewItem items = new ListViewItem(item);
            listView_bill.Items.Add(items);
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void Form3_Load(object sender, EventArgs e)
        {
            string QueryBill = "SELECT DISTINCT sales.SaleID AS BillCode ,CustomerName,SaleDateTime,SUM(Price) AS Total ,No_table";
            string QueryBill1 = QueryBill + " FROM customers NATURAL JOIN sales,sale_details";
            string QueryBill2 = QueryBill1 + " WHERE sales.SaleID = sale_details.SaleID GROUP BY BillCode;";
            connection.Open();
            command = new MySqlCommand(QueryBill2, connection);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                AddData(reader.GetString("BillCode"), reader.GetString("CustomerName"), reader.GetString("SaleDateTime"), reader.GetString("Total"), reader.GetString("No_table"));
            }
            connection.Close();
        }
    }
}
