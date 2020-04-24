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
    public partial class Form4 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form4()
        {
            InitializeComponent();
            AddColunm();
        }

        private void AddColunm()
        {
            listView_order.View = View.Details;
            listView_order.Columns.Add("CodeOder", 100);
            listView_order.Columns.Add("Menu", 350);
            listView_order.Columns.Add("Customer", 350);
            listView_order.Columns.Add("Cost", 100);
            listView_order.Columns.Add("Table", 100);
        }

        private void Form4_Load(object sender, EventArgs e)
        {
            string QueryBill = "SELECT SaleDetailID,ProductName,CustomerName,Price,No_table";
            string QueryBill1 = QueryBill + " FROM customers NATURAL JOIN sales,sale_details";
            string QueryBill2 = QueryBill1 + " WHERE sales.SaleID = sale_details.SaleID AND CheckOrder != 'checked'  ORDER BY sale_details.SaleDetailID;";
            connection.Open();
            command = new MySqlCommand(QueryBill2, connection);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                AddData(reader.GetString("SaleDetailID"), reader.GetString("ProductName"), reader.GetString("CustomerName"), reader.GetString("Price"), reader.GetString("No_table"));
            }
            connection.Close();
        }

        private void AddData(string codeoder,string menu, string customer,string cost,string table)
        {
            string[] item = { codeoder, menu, customer, cost, table };
            ListViewItem items = new ListViewItem(item);
            listView_order.Items.Add(items);

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void Form4_Click(object sender, EventArgs e)
        {

        }

        private void listView_order_Click(object sender, EventArgs e)
        {
            string id = listView_order.SelectedItems[0].SubItems[0].Text;
            int ids = int.Parse(id);
            MessageBox.Show(id+" Check Ordered");

            string QueryBill = "UPDATE sale_details SET CheckOrder = 'checked' WHERE sale_details.SaleDetailID = "+ids;
            connection.Open();
            command = new MySqlCommand(QueryBill, connection);
            MySqlDataReader reader = command.ExecuteReader();

            connection.Close();

        }
    }
}
