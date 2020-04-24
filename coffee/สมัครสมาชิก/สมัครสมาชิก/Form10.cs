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
    public partial class Form10 : Form
    {
        // connect Database 
        MySqlConnection connection = new MySqlConnection("host=localhost;user=root;password=12345678;database=final");
        MySqlCommand command;

        public Form10()
        {
            InitializeComponent();
            AddColunm();
        }
        private void AddColunm()
        {
            listView_menu.View = View.Details;
            listView_menu.Columns.Add("ProductID", 100);
            listView_menu.Columns.Add("ProductName", 350);
            listView_menu.Columns.Add("Cost", 100);
            listView_menu.Columns.Add("Type", 100);
            listView_menu.Columns.Add("Url", 350);
        }

        private void AddData(string productid, string productname, string cost, string type, string url)
        {
            string[] item = { productid,productname,cost,type,url };
            ListViewItem items = new ListViewItem(item);
            listView_menu.Items.Add(items);

        }

        private void Form10_Load(object sender, EventArgs e)
        {
            string QueryMenu = "SELECT * FROM products";
            connection.Open();
            command = new MySqlCommand(QueryMenu, connection);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                AddData(reader.GetString("ProductID"), reader.GetString("ProductName"), reader.GetString("Price"), reader.GetString("Type"), reader.GetString("Url"));
            }
            connection.Close();
        }

        private void listView_menu_Click(object sender, EventArgs e)
        {
            string id = listView_menu.SelectedItems[0].SubItems[0].Text;
            int ids = int.Parse(id);
            MessageBox.Show(id + " Check Menu");

            Form6 f6 = new Form6(ids);
            f6.Show();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
